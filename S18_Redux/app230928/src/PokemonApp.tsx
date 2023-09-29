import { useEffect } from "react";
import { getPokemons } from "./store/slices/pokemon";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { increment } from "./store/slices/counter";

export const PokemonApp = () => {
  const { pokemons, counter } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { isLoading, pokemons: pokemonList } = pokemons;
  const { value } = counter;

  useEffect(() => {
    dispatch(getPokemons(value));
  }, [value]);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading {isLoading ? "true" : "false"}</span>
      <p>{JSON.stringify(isLoading)}</p>
      <h3>page {value}</h3>
      <ul>
        {!isLoading &&
          pokemonList.map((pokemon) => {
            return <li key={pokemon.id}>{pokemon.name}</li>;
          })}
      </ul>
      <button
        disabled={isLoading}
        onClick={() => {
          dispatch(increment());
        }}
      >
        Next
      </button>
    </>
  );
};
