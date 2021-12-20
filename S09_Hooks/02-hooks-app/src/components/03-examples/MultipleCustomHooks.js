import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./styles.css";

export const MultipleCustomHooks = () => {
  // first custom hook
  const { state, increment } = useCounter(1);

  //   second custom hook
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  // const {quote, author} = data[0]
  // lo anterior es igual a lo siguiente: si data es null, !data es verdadero y !!data es falso.
  //   Si data es información !data es falso y !!data es verdadero
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h3> 111. useFetch: multiple custom Hooks</h3>
      <h4>Breaking Bad Quotes</h4>

      {loading ? (
        <div className="alert alert-info text-center">Loading</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0"> {quote}</p>
        </blockquote>
      )}
      <footer className="blockquote-footer"> {author} </footer>

      <button className="btn btn-secondary" onClick={increment}>
        Next quote
      </button>
      <hr></hr>
    </div>
  );
};
