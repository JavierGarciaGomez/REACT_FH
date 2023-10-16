// 320
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventDelete } from "../../actions/eventActions";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(eventDelete());
  };
  return (
    <button className="btn btn-danger fab-danger" onClick={handleClick}>
      <i className="fas fa-trash">Borrar evento</i>
    </button>
  );
};
