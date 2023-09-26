import { heros } from "../data/heros";

export const getHeroById = (id: string) => {
  return heros.find((hero) => hero.id === id);
};
