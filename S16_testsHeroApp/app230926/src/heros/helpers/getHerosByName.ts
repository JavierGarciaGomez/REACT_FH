import { heros } from "../data/heros";

export const getHeroesByName = (name = "") => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return heros.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
