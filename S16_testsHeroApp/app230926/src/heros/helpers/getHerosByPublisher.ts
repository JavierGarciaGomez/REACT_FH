import { heros } from "../data/heros";

export const getHerosByPublisher = (publisher: string) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heros.filter((hero) => hero.publisher === publisher);
};
