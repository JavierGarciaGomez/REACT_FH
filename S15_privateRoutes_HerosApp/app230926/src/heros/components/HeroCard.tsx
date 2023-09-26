import { Link } from "react-router-dom";
import { Hero } from "../../types/types";

type CharacterByHeroProps = {
  alter_ego: string;
  characters: string;
};

const CharactersByHero = ({ alter_ego, characters }: CharacterByHeroProps) => {
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};

type Props = {
  hero: Hero;
};

export const HeroCard = ({ hero }: Props) => {
  const heroImageUrl = `/assets/heros/${hero.id}.jpg`;
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={hero.superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text">{hero.alter_ego}</p>
              <CharactersByHero
                alter_ego={hero.alter_ego}
                characters={hero.characters}
              />
              <p className="card-text">
                <small className="text-muted">{hero.first_appearance}</small>
              </p>
              <Link to={`/hero/${hero.id}`}>More..</Link>
            </div>
          </div>
        </div>
      </div>
      {hero.superhero}
    </div>
  );
};
