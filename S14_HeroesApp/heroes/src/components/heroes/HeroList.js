// 174, 175
import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHerosByPublisher";
import { HeroCard } from "./HeroCard";
import "animate.css";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="card-columns animate__animated animate__fadeIn ">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero}></HeroCard>
      ))}
    </div>
  );
};
