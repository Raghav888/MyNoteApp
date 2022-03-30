import React from "react";

import "./filterbox.css";
export const Filterbox = (props) => {
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
            <input type="radio" id="date" name="sort" />
            <label htmlFor="date" className="radio-filter">
              Sort by Date
            </label>
          </div>
          <div>
            <input type="radio" id="priority" name="sort" />
            <label htmlFor="priority" className="radio-filter">
              Sort by Priority
            </label>
          </div>
        </div>

        <p className="filter-tag">Tags :</p>
        <div className="tag-box">
          <div>
            <input type="checkbox" id="home" />
            <label htmlFor="home" className="tag-space">
              Home
            </label>
          </div>
          <div>
            <input type="checkbox" id="work" />
            <label htmlFor="work" className="tag-space">
              Work
            </label>
          </div>
          <div>
            <input type="checkbox" id="bank" />
            <label htmlFor="bank" className="tag-space">
              Bank
            </label>
          </div>
        </div>
        <div className="tag-boxtwo">
          <div>
            <input type="checkbox" id="finance" />
            <label htmlFor="finance" className="tag-space">
              Finance
            </label>
          </div>
          <div>
            <input type="checkbox" id="health" />
            <label htmlFor="health" className="tag-space">
              Health
            </label>
          </div>
        </div>

        <div className="footer">
          <button id="cancelBtn" onClick={() => props.closeinputbox(false)}>
            Cancel
          </button>
          <button onClick={() => console.log("its done")}>Submit</button>
        </div>
      </div>
    </div>
  );
};
