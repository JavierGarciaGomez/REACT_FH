import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useAppDispatch } from "../../hooks";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const dispatch = useAppDispatch();
  const handleClickNewNote = () => {
    dispatch(startNewNote());
  };
  console.log({ NothingSelectedView });
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        onClick={handleClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
