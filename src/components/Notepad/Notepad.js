import "./notepad.css";
import React from "react";
export const Notepad = (props) => {
  return (
    <div className={`notelist ${props.item.cardcolor}`}>
      <h1 className="text-align-left text-bold">{props.item.title}</h1>
      <div className="note-data">
        <p className="text-align-left">{props.item.data}</p>
        <div className="note-footer">
          <div className="note-label">{props.item.tag.toLowerCase()}</div>
          {props.item.priority === 1 && <div className="note-label">low</div>}
          {props.item.priority === 2 && (
            <div className="note-label">medium</div>
          )}
          {props.item.priority === 3 && <div className="note-label">high</div>}
          <div>Created on {props.item.date}</div>
          {props.item.istrashed ? null : props.item.isArchived ? (
            <div className="note-option">
              <i
                className="fa fa-trash note-option-icon"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-pencil note-option-icon"
                aria-hidden="true"
              ></i>
            </div>
          ) : (
            <div className="note-option">
              <i
                className="fa fa-archive note-option-icon"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-trash note-option-icon"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-pencil note-option-icon"
                aria-hidden="true"
              ></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
