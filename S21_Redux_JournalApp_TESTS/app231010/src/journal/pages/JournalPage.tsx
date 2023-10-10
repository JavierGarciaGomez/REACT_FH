import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { startLoadingNotes, startNewNote } from "../../store/journal";
import { useEffect } from "react";

export const JournalPage = () => {
  const dispatch = useAppDispatch();
  const { isSaving, activeNote: active } = useAppSelector(
    (state) => state.journalReducer
  );
  const handleClickNewNote = () => {
    dispatch(startNewNote());
  };
  useEffect(() => {
    dispatch(startLoadingNotes());
  }, [dispatch]);

  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      {active ? <NoteView /> : <NothingSelectedView />}
      <IconButton
        onClick={handleClickNewNote}
        disabled={isSaving}
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
