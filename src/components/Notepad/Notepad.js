import "./notepad.css";
import React from "react";
export const Notepad = (props) => {
  return (
    <div className="notelist">
      <h1 className="text-align-left text-bold">{props.item.title}</h1>
      <div className="note-data">
        <p className="text-align-left">{props.item.data}</p>
        <div className="note-footer">
          <div>Created on {props.item.date}</div>
          <div className="note-option">
            <i
              className="fa fa-palette note-option-icon"
              aria-hidden="true"
            ></i>
            <i
              className="fa fa-archive note-option-icon"
              aria-hidden="true"
            ></i>
            <i className="fa fa-trash note-option-icon" aria-hidden="true"></i>
            <i className="fa fa-pencil note-option-icon" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
