import { ChangeEvent, useState } from "react";

// Define a generic type for the initial form state
type InitialFormState<T> = {
  [K in keyof T]: string;
};

export const useForm = <T extends Record<string, string>>(initialForm: T) => {
  const [formState, setFormState] = useState<InitialFormState<T>>(initialForm);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormState(initialForm);
  };

  return { handleInputChange, formState, handleReset };
};
