// 180, 181
import React, { useMemo } from "react";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { useLocation } from "react-router";
import { getHeroesByName } from "../../selectors/getHerosByName";
import { heroes } from "../../data/heros";
import { useNavigate } from "react-router-dom";
import querystring from "query-string";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = queryString.parse(location.search);
  const { q = "" } = query;

  const [{ searchText }, handleInputChange, reset] = useForm({
    searchText: q,
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate(`?q=${searchText}`);
  };

  const heros = useMemo(() => getHeroesByName(q), [q]);

  return (
    <div>
      <h1>Search Screen</h1>
      <hr></hr>
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="find your hero"
              className="form-control"
              name="searchText"
              onChange={handleInputChange}
              value={searchText}
            />
            <button
              type="submit"
              className="btn m-1 btn-block bt-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>

          <hr></hr>
          {heros.length == 0 && (
            <div className="alert alert-info">No heros found</div>
          )}
          {heros.map((hero) => (
            <HeroCard key={hero.id} {...hero}></HeroCard>
          ))}
        </div>
      </div>
    </div>
  );
};
