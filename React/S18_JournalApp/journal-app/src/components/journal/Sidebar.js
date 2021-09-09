// 224, 251, 259, 260
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  // 251
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("click handleLogout");
    dispatch(startLogout());
  };
  // 260
  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  // 259
  const { name } = useSelector((state) => state.auth);

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span>{name}</span>
        </h3>
        {/* 251 */}
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry" onClick={handleAddNew}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p>New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};
