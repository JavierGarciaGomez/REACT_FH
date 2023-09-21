import useCounter from "../01-useState/hooks/useCounter";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";
import { useFetch } from "./hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter();

  const { data, isLoading, hasError } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${counter}`
  );

  const title = data?.title;
  const body = data?.body;

  return (
    <>
      <h1>MultipleCustomHooks</h1>
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
