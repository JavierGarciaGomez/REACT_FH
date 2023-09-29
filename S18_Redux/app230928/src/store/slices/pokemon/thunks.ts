import { AppThunk } from "./../../store";
import { Dispatch } from "redux";
import {
  SetPokemonsPayload,
  setPokemons,
  startLoadingPokemons,
} from "./pokemonSlice";
import { RootState } from "../..";

import { PokemonApiResponse } from "../../../types/types";
import { pokemonApi } from "../../../api/pokemonApi";

const ITEMS_PER_PAGE = 10;
const calculateOffset = (page: number) => page * ITEMS_PER_PAGE;

export const getPokemons = (page: number = 0): AppThunk => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    console.log(getState());
    dispatch(startLoadingPokemons());

    try {
      const offset = calculateOffset(page);
      const { data } = await pokemonApi.get<PokemonApiResponse>(
        `/pokemon?limit=${ITEMS_PER_PAGE}&offset=${offset}`
      );

      const payload: SetPokemonsPayload = {
        pokemons: data.results,
        page: page + 1,
      };

      dispatch(setPokemons(payload));
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  };
};
