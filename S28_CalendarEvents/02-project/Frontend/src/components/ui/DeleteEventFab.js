// 320
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventDelete, eventStartDelete } from "../../actions/eventActions";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(eventStartDelete());
  };
  return (
    <button className="btn btn-danger fab-danger" onClick={handleClick}>
      <i className="fas fa-trash">Borrar evento</i>
    </button>
  );
};
