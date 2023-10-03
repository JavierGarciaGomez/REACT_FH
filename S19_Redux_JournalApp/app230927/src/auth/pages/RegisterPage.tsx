import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import {
  FormValidations,
  useAppDispatch,
  useAppSelector,
  useForm,
} from "../../hooks";
import { FormEvent, useMemo, useState } from "react";
import { startCreatingUserWithEmailPassword } from "../../store";

const initialForm = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations: FormValidations<typeof initialForm> = {
  email: [
    {
      function: (value: string) => value.includes("@"),
      error: "The email should contain an @",
    },
    {
      function: (value: string) => value.length > 5,
      error: "The email should contain at least 5 characters",
    },
  ],
  password: [
    {
      function: (value: string) => value.length > 6,
      error: "The password should contain at least 6 characters",
    },
  ],
  displayName: [
    {
      function: (value: string) => value.length > 3,
      error: "The display name should contain at least 3 characters",
    },
  ],
};

export const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const { status, errorMessage } = useAppSelector((state) => state.authReducer);
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const [isFormSubmitted, setisFormSubmitted] = useState<boolean>(false);
  const {
    formState,
    handleInputChange,
    handleReset,
    formValidation,
    isFormValid,
  } = useForm(initialForm, formValidations);

  const { displayName, email, password } = formState;
  const {
    displayName: isDisplayNameValid,
    email: isEmailValid,
    password: isPasswordValid,
  } = formValidation;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setisFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));

    handleReset();
  };

  return (
    <AuthLayout title="Register">
      <form
        onSubmit={handleSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="name"
              placeholder="name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={handleInputChange}
              error={!!isDisplayNameValid && isFormSubmitted}
              helperText={isFormSubmitted && isDisplayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={handleInputChange}
              error={!!isEmailValid && isFormSubmitted}
              helperText={isFormSubmitted && isEmailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={handleInputChange}
              error={!!isPasswordValid && isFormSubmitted}
              helperText={isFormSubmitted && isPasswordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6} display={errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isAuthenticating}
              >
                Register
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>
              Do you already have an account?
            </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
