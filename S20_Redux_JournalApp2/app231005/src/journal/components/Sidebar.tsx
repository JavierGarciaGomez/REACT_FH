import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";
import { SidebarItem } from "./SidebarItem";

type Props = { drawerWidth: number };

export const Sidebar = ({ drawerWidth }: Props) => {
  const { displayName } = useAppSelector((state) => state.authReducer);
  const { notes } = useAppSelector((state) => state.journalReducer);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent" // temporary
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <SidebarItem note={note} key={note.id} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
