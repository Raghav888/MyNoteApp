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
    today = dd + "/" + mm + "/" + yyyy;

    const newData = { ...inputdatastate, id: v4(), date: today };
    noteListDisptach({
      type: "ADD_NOTE",
      payload: { value: newData },
    });
    inputdatadispatch({
      type: "CLEAR",
    });
    props.closeinputbox(false);
  };
  return (
    <div className="inputbox-background">
      <div className={`inputbox-container ${inputdatastate.cardcolor}`}>
        <div className="titleCloseBtn">
          <button
            className="close-button"
            onClick={() => props.closeinputbox(false)}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="title">
          <input
            className={`title-data ${inputdatastate.cardcolor}`}
            type="text"
            placeholder="  Title"
            required
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
            <option value="WORK">WORK</option>
            <option value="HEALTH">HEALTH</option>
            <option value="HOME">HOME</option>
            <option value="SCHOOL">SCHOOL</option>
            <option value="BANK">BANK</option>
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
            <option value="1">LOW</option>
            <option value="2">MEDIUM</option>
            <option value="3">HIGH</option>
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
            <option value="white-box">WHITE</option>
            <option value="red-box">RED</option>
            <option value="blue-box">BLUE</option>
            <option value="green-box">GREEN</option>
            <option value="cream-box">Cream</option>
          </select>
        </div>
        <div className="footer">
          <button id="cancelBtn" onClick={() => props.closeinputbox(false)}>
            Cancel
          </button>
          <button onClick={() => sendData()}>Submit</button>
        </div>
      </div>
    </div>
  );
};
