// 180, 181
import React, { useMemo } from "react";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { useLocation } from "react-router";
import { getHeroesByName } from "../../selectors/getHerosByName";

export const SearchScreen = ({ history }) => {
  // 181
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({ searchText: q });
  const { searchText } = formValues;

  const herosFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr></hr>
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr></hr>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="find your hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
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
          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {q !== "" && herosFiltered.length === 0 && (
            <div className="alert alert-info">
              There is no a hero with that name
            </div>
          )}
          {herosFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
