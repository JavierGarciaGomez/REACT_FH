import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { FormEvent } from "react";

const initialForm = {
  email: "",
  password: "",
  displayName: "",
};

type ValidationFunction = (value: string) => boolean;

type FormValidations<T> = {
  [K in keyof T]: Array<{ function: ValidationFunction; error: string }>;
};

const formValidations: FormValidations<{
  email: string;
  password: string;
  displayName: string;
}> = {
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
  const { formState, handleInputChange, handleReset, formValidation } = useForm(
    initialForm,
    formValidations
  );
  console.log({ formValidation });
  const { displayName, email, password } = formState;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({ displayName, email, password });
    handleReset();
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit}>
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
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit">
                <Typography sx={{ ml: 1 }}>Register</Typography>
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
