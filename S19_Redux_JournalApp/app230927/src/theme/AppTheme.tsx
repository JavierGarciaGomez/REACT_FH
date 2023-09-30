import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { defaultTheme } from "./defaultTheme";

type Props = {
  children: React.ReactNode;
};

export const AppTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
