import React from "react";
import { v4 } from "uuid";
import { useInputData } from "../../context/inputdata-context";
import { useNote } from "../../context/note-context";

import "./inputbox.css";
export const InputBox = (props) => {
  const { inputdatastate, inputdatadispatch } = useInputData();
  const { noteListDisptach } = useNote();

  const sendData = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    today = yyyy + "/" + mm + "/" + dd;
    if (inputdatastate.archive) {
      const newData = { ...inputdatastate, date: today };
      noteListDisptach({
        type: "EDIT_ARCHIVE",
        payload: { value: newData },
      });
    } else if (inputdatastate.id !== null) {
      const newData = { ...inputdatastate, date: today };
      noteListDisptach({
        type: "EDIT_NOTE",
        payload: { value: newData },
      });
    } else {
      const newData = { ...inputdatastate, id: v4(), date: today };
      noteListDisptach({
        type: "ADD_NOTE",
        payload: { value: newData },
      });
    }
    inputdatadispatch({
      type: "CLEAR",
    });
    props.closeinputbox(false);
  };

  const closeBox = () => {
    props.closeinputbox(false);
    inputdatadispatch({
      type: "CLEAR",
    });
  };
  return (
    <div className="inputbox-background">
      <div className={`inputbox-container ${inputdatastate.cardcolor}`}>
        <div className="titleCloseBtn">
          <button className="close-button" onClick={() => closeBox()}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="title">
          <input
            className={`title-data ${inputdatastate.cardcolor}`}
            type="text"
            placeholder="  Title"
            required
            value={inputdatastate.title}
            onChange={(event) =>
              inputdatadispatch({
                type: "ADD_TITLE",
                payload: { value: event.target.value },
              })
            }
          />
        </div>
        <div className="body">
          <textarea
            className={`input-data  ${inputdatastate.cardcolor}`}
            placeholder="  Enter data"
            cols="39"
            rows="5"
            required
            value={inputdatastate.data}
            onChange={(event) =>
              inputdatadispatch({
                type: "ADD_DATA",
                payload: { value: event.target.value },
              })
            }
          ></textarea>
        </div>
        <div className="dropdown">
          <label htmlFor="tag-names">Tag:</label>
          <select
            className="list-item"
            name="tag-names"
            onClick={(event) =>
              inputdatadispatch({
                type: "ADD_TAG",
                payload: { value: event.target.value },
              })
            }
          >
            <option selected={inputdatastate.tag === "WORK"} value="WORK">
              WORK
            </option>
            <option selected={inputdatastate.tag === "HEALTH"} value="HEALTH">
              HEALTH
            </option>
            <option selected={inputdatastate.tag === "HOME"} value="HOME">
              HOME
            </option>
            <option selected={inputdatastate.tag === "SCHOOL"} value="SCHOOL">
              SCHOOL
            </option>
            <option selected={inputdatastate.tag === "BANK"} value="BANK">
              BANK
            </option>
          </select>
          <label htmlFor="priority-names">Priority:</label>
          <select
            className="list-item"
            name="priority-names"
            onClick={(event) =>
              inputdatadispatch({
                type: "ADD_PRIORITY",
                payload: { value: event.target.value },
              })
            }
          >
            <option selected={inputdatastate.priority === 1} value="1">
              LOW
            </option>
            <option selected={inputdatastate.priority === 2} value="2">
              MEDIUM
            </option>
            <option selected={inputdatastate.priority === 3} value="3">
              HIGH
            </option>
          </select>

          <label htmlFor="color-names">Color:</label>
          <select
            className="list-item"
            name="color-names"
            onClick={(event) =>
              inputdatadispatch({
                type: "ADD_CARDCOLOR",
                payload: { value: event.target.value },
              })
            }
          >
            <option
              selected={inputdatastate.cardcolor === "white-box"}
              value="white-box"
            >
              WHITE
            </option>
            <option
              selected={inputdatastate.cardcolor === "red-box"}
              value="red-box"
            >
              RED
            </option>
            <option
              selected={inputdatastate.cardcolor === "blue-box"}
              value="blue-box"
            >
              BLUE
            </option>
            <option
              selected={inputdatastate.cardcolor === "green-box"}
              value="green-box"
            >
              GREEN
            </option>
            <option
              selected={inputdatastate.cardcolor === "cream-box"}
              value="cream-box"
            >
              Cream
            </option>
          </select>
        </div>
        <div className="footer">
          <button id="cancelBtn" onClick={() => closeBox()}>
            Cancel
          </button>
          <button onClick={() => sendData()}>Submit</button>
        </div>
      </div>
    </div>
  );
};
