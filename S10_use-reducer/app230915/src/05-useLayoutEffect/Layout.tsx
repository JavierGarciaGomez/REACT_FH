import useCounter from "../01-useState/hooks/useCounter";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";
import { useFetch } from "../03-examples/hooks/useFetch";

export const Layout = () => {
  const { counter, increment } = useCounter();

  const { data, isLoading, hasError } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${counter}`
  );

  const title = data?.title;
  const body = data?.body;

  return (
    <>
      <h1>Layout</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote title={title!} body={body!} />}
      {hasError && <p>Error</p>}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
