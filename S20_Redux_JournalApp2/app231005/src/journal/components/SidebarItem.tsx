import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Note } from "../../types/storeTypes";
import { useMemo } from "react";
import { useAppDispatch } from "../../hooks";
import { setActiveNote } from "../../store/journal";

type Props = {
  note: Note;
};

export const SidebarItem = ({ note }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setActiveNote(note));
  };

  const newTitle = useMemo(() => note.title.slice(0, 15), [note.title]);
  return (
    <ListItem key={note.id} disablePadding onClick={handleClick}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={note.body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
