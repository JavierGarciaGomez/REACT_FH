import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useAppDispatch, useForm } from "../../hooks";
import { FormEvent } from "react";
import { checkingAuth } from "../../store";

export const LoginPage = () => {
  const { formState, handleInputChange, handleReset } = useForm({
    email: "jgg@mail.com",
    password: "secret",
  });
  const dispatch = useAppDispatch();
  const { email, password } = formState;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuth({ email, password }));
    handleGoogleSignIn();
    handleReset();
  };

  const handleGoogleSignIn = () => {
    console.log("handleGoogle");
  };
  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              value={email}
              name={email}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              value={password}
              name={password}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
