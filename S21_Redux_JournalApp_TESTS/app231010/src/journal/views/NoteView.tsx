import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useAppDispatch, useAppSelector, useForm } from "../../hooks";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  setActiveNote,
  startDeletingNote,
  startSavingNote,
  startUploadingFiles,
} from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {
  const dispatch = useAppDispatch();
  const { activeNote, messageSaved, isSaving } = useAppSelector(
    (state) => state.journalReducer
  );
  const [initialState, setinitialState] = useState({
    body: "",
    title: "",
  });
  const { id, imageUrls, date } = activeNote!;
  useEffect(() => {
    setinitialState({ body: activeNote!.body, title: activeNote!.title });
  }, [activeNote]);

  const { formState, handleInputChange } = useForm(initialState);

  const { body, title } = formState;
  const dateString = useMemo(
    () => new Date(activeNote!.date!).toUTCString(),
    [activeNote]
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(setActiveNote({ body, title, id, imageUrls, date }));
  }, [body, title, dispatch, id, imageUrls, date]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({ title: "Updated note", html: messageSaved, icon: "success" });
    }
  }, [messageSaved]);

  const handleSave = () => {
    dispatch(startSavingNote());
  };

  const handleFileInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files?.length === 0) return;
    const files = target.files;

    dispatch(startUploadingFiles(files!));
  };

  const handleDeleteNote = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleFileInputChange}
          style={{ display: "none" }}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current?.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={handleSave}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
          value={title}
          name="title"
          onChange={handleInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
          value={body}
          name="body"
          onChange={handleInputChange}
        />
      </Grid>

      <Grid container justifyContent="end">
        <Button onClick={handleDeleteNote} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          Delete
        </Button>
      </Grid>

      <ImageGallery imagesUrls={imageUrls} />
    </Grid>
  );
};
