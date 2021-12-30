// 274, 277 upload picture
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notesActions";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { activeNote } = useSelector((state) => state.notes);
  const handleSave = () => {
    console.log(activeNote);
    dispatch(startSaveNote(activeNote));
  };
  // 277
  const handlePictureUpload = () => {
    document.querySelector("#fileSelector").click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      dispatch(startUploading(file));
    }
  };
  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>
      {/* 277 */}
      <input
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        id="fileSelector"
        name="file"
      />

      <div>
        <button className="btn" onClick={handlePictureUpload}>
          Picture
        </button>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
