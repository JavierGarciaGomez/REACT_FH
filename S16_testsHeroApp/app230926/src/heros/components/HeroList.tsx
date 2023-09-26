import { useMemo } from "react";
import { HeroCard } from ".";
import { getHerosByPublisher } from "../helpers/getHerosByPublisher";

type Props = {
  publisher: string;
};

export const HeroList = ({ publisher }: Props) => {
  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heros.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
