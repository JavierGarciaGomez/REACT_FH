import { ChangeEvent, useEffect, useMemo, useState } from "react";

type FormState<T> = {
  [K in keyof T]: string;
};

type ValidationFunction = (value: string) => boolean;

type FormValidations<T> = {
  [K in keyof T]: Array<{ function: ValidationFunction; error: string }>;
};

type FormValidationState<T> = {
  [K in keyof T]: string[] | undefined;
};

export const useForm = <T extends Record<string, string>>(
  initialForm: T,
  formValidations?: FormValidations<T>
) => {
  const [formState, setFormState] = useState<FormState<T>>(initialForm);
  const [formValidationState, setFormValidationState] = useState<
    FormValidationState<T>
  >({} as FormValidationState<T>);

  useEffect(() => {
    const createValidators = () => {
      const formCheckedValues = {} as FormValidationState<T>;

      for (const fieldName in initialForm) {
        formCheckedValues[fieldName] = undefined;
      }

      if (formValidations) {
        for (const fieldName in formValidations) {
          const validations = formValidations[fieldName];
          const errors: string[] = [];
          for (const validation of validations) {
            const { function: validateFn, error } = validation;
            if (!validateFn(formState[fieldName])) {
              errors.push(error);
            }
          }
          formCheckedValues[fieldName] = errors.length > 0 ? errors : undefined;
        }
      }
      setFormValidationState(formCheckedValues);
    };
    createValidators();
  }, [formState, formValidations, initialForm]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidationState)) {
      if (formValidationState[formValue] !== null) return false;
    }

    return true;
  }, [formValidationState]);

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

  return {
    handleInputChange,
    formState,
    handleReset,
    formValidation: formValidationState,
    isFormValid,
  };
};
