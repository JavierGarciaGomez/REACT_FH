import { CounterApp } from "./01-useState/CounterApp";
import { CounterAppWithCustomHook } from "./01-useState/CounterAppWithCustomHook";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { CallbackHook } from "./06-memos/CallbackHook";
import { MemoHook } from "./06-memos/MemoHook";
import { Memorize } from "./06-memos/Memorize";
import { Padre } from "./07-Memo task/Padre";

export const HooksApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      <CounterApp />
      <CounterAppWithCustomHook />
      <SimpleForm />
      <FormWithCustomHook />
      <MultipleCustomHooks />
      <FocusScreen />
      <Layout />
      <Memorize />
      <MemoHook />
      <CallbackHook />
      <Padre />
    </>
  );
};
