import { FormEvent } from "react";
import { useForm } from "./hooks/UseForm";

type Props = {
  handleAddTodo: (value: string) => void;
};

const initialForm = { description: "" };

export const TodoAdd = ({ handleAddTodo }: Props) => {
  const { formState, handleInputChange, handleReset } = useForm(initialForm);
  const { description } = formState;

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleAddTodo(description);
    handleReset();
  };
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Next todo"
          className="form-control"
          name="description"
          onChange={handleInputChange}
          value={description}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Add
        </button>
      </form>
    </>
  );
};
