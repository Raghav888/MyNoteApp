import "./notepad.css";
import React, { useState } from "react";
import { useNote } from "../../context/note-context";
import { useInputData } from "../../context/inputdata-context";
import { InputBox } from "../InputBox/InputBox";
export const Notepad = (props) => {
  const { noteListDisptach } = useNote();
  const { inputdatadispatch } = useInputData();
  const [openinputbox, setinputbox] = useState(false);
  const editNote = (val) => {
    inputdatadispatch({
      type: "ADD_TITLE",
      payload: { value: props.item.title },
    });
    inputdatadispatch({
      type: "ADD_DATA",
      payload: { value: props.item.data },
    });
    inputdatadispatch({
      type: "ADD_TAG",
      payload: { value: props.item.tag },
    });
    inputdatadispatch({
      type: "ADD_PRIORITY",
      payload: { value: props.item.priority },
    });
    inputdatadispatch({
      type: "ID",
      payload: { value: props.item.id },
    });
    inputdatadispatch({
      type: "ADD_CARDCOLOR",
      payload: { value: props.item.cardcolor },
    });
    if (val) {
      inputdatadispatch({
        type: "ARCHIVE_DATA",
        payload: { value: true },
      });
    }
    setinputbox(true);
  };
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
                onClick={() =>
                  noteListDisptach({
                    type: "DELETE_NOTE_FROM_ARCHIVE",
                    payload: { value: props.item.id },
                  })
                }
              ></i>
              <i
                className="fa fa-pencil note-option-icon"
                aria-hidden="true"
                onClick={() => editNote(true)}
              ></i>
            </div>
          ) : (
            <div className="note-option">
              <i
                className="fa fa-archive note-option-icon"
                aria-hidden="true"
                onClick={() =>
                  noteListDisptach({
                    type: "ARCHIVE_NOTE",
                    payload: { value: props.item },
                  })
                }
              ></i>
              <i
                className="fa fa-trash note-option-icon"
                aria-hidden="true"
                onClick={() =>
                  noteListDisptach({
                    type: "DELETE_NOTE",
                    payload: { value: props.item.id },
                  })
                }
              ></i>
              <i
                className="fa fa-pencil note-option-icon"
                aria-hidden="true"
                onClick={() => editNote()}
              ></i>
            </div>
          )}
        </div>
      </div>
      {openinputbox && <InputBox closeinputbox={setinputbox} />}
    </div>
  );
};
