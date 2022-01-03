// 313

import React from "react";

export const CalendarEvent = ({ event }) => {
  const { title, start, end, notes, user } = event;
  const { name } = user;
  return (
    <div>
      <strong>{title}</strong>
      <span> - {name}</span>
    </div>
  );
};
