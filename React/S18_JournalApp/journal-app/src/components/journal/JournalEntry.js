// 224
import React from "react";

export const JournalEntry = ({ entry }) => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://images.squarespace-cdn.com/content/v1/52a1c284e4b0ad3b7d8f04f0/1409934786000-AUU962L0QXTRFNYLCE8M/image-asset.jpeg",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">{entry} Un nuevo día</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
