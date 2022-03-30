import React from "react";
import { useNote } from "../../context/note-context";

import "./filterbox.css";
export const Filterbox = (props) => {
  const { noteListDisptach, noteListState } = useNote();
  return (
    <div className="filterbox-background">
      <div className="filterbox-container">
        <div className="filterCloseBtn">
          <button
            className="close-button"
            onClick={() => props.closeinputbox(false)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="filter-title text-bold">Filter</div>

        <div className="sort">
          <div>
            <input
              type="radio"
              id="date"
              name="sort"
              checked={noteListState.sortbydate}
              onClick={() =>
                noteListDisptach({
                  type: "SORT_BY_DATE",
                })
              }
            />
            <label htmlFor="date" className="radio-filter">
              Sort by Date
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="priority"
              name="sort"
              checked={noteListState.sortbypriority}
              onClick={() =>
                noteListDisptach({
                  type: "SORT_BY_PRIORITY",
                })
              }
            />
            <label htmlFor="priority" className="radio-filter">
              Sort by Priority
            </label>
          </div>
        </div>

        <p className="filter-tag">Tags :</p>
        <div className="tag-box">
          <div>
            <input
              type="checkbox"
              id="home"
              onClick={() =>
                noteListDisptach({
                  type: "TAG_FILTER",
                  payload: { value: "HOME" },
                })
              }
              checked={noteListState.tags.includes("HOME")}
            />
            <label htmlFor="home" className="tag-space">
              Home
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="work"
              onClick={() =>
                noteListDisptach({
                  type: "TAG_FILTER",
                  payload: { value: "WORK" },
                })
              }
              checked={noteListState.tags.includes("WORK")}
            />
            <label htmlFor="work" className="tag-space">
              Work
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="bank"
              onClick={() =>
                noteListDisptach({
                  type: "TAG_FILTER",
                  payload: { value: "BANK" },
                })
              }
              checked={noteListState.tags.includes("BANK")}
            />
            <label htmlFor="bank" className="tag-space">
              Bank
            </label>
          </div>
        </div>
        <div className="tag-boxtwo">
          <div>
            <input
              type="checkbox"
              id="school"
              onClick={() =>
                noteListDisptach({
                  type: "TAG_FILTER",
                  payload: { value: "SCHOOL" },
                })
              }
              checked={noteListState.tags.includes("SCHOOL")}
            />
            <label htmlFor="school" className="tag-space">
              School
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="health"
              onClick={() =>
                noteListDisptach({
                  type: "TAG_FILTER",
                  payload: { value: "HEALTH" },
                })
              }
              checked={noteListState.tags.includes("HEALTH")}
            />
            <label htmlFor="health" className="tag-space">
              Health
            </label>
          </div>
        </div>
        <div
          className="filter-clear text-bold"
          onClick={() =>
            noteListDisptach({
              type: "CLEAR_FILTER",
            })
          }
        >
          Clear Filter
        </div>
        <div className="footer">
          <button id="cancelBtn" onClick={() => props.closeinputbox(false)}>
            Cancel
          </button>
          <button onClick={() => props.closeinputbox(false)}>Submit</button>
        </div>
      </div>
    </div>
  );
};
