import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../../types/types";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface PokemonState {
  page: number;
  pokemons: Pokemon[];
  isLoading: boolean;
}

export type SetPokemonsPayload = {
  page: number;
  pokemons: Pokemon[];
};

const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<SetPokemonsPayload>) => {
      state.pokemons = action.payload.pokemons;
      state.isLoading = false;
      state.page = action.payload.page;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions;
