import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter";

export const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value by 2"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by 2
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
