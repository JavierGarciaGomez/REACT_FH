import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Navbar, Sidebar } from "../components";

const drawerWidth = 280;

type Props = {
  children: React.ReactNode;
};
export const JournalLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />

      <Sidebar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
