import { Dispatch } from "redux";
import { RootState } from "..";
import { checkingCredentials } from ".";

export const checkingAuth = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(checkingCredentials);
    console.log({ email, password, getState, dispatch });
  };
};
