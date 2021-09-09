// 225, 264
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  const entries = [1, 2, 3, 4, 5];
  // 264
  const { notes } = useSelector((state) => state.notes);
  console.log("printing state", notes);

  return (
    <div className="journal__entries animate__animated animate__fadeIn animate__faster">
      {notes.map((note) => (
        <JournalEntry key={note.id} {...note}></JournalEntry>
      ))}
    </div>
  );
};
