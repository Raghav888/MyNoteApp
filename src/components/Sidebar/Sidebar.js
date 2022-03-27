import { Link } from "react-router-dom";
import React, { useState } from "react";
import { v4 } from "uuid";
import "./sidebar.css";

const sideboxData = [
  {
    id: v4(),
    pageName: "Home",
    path: "/",
    class: "fa fa-home",
    active: "sidebar-sub-active",
  },
  { id: v4(), pageName: "Labels", path: "/labels", class: "fa fa-tag" },
  { id: v4(), pageName: "Archive", path: "/archive", class: "fa fa-archive" },
  { id: v4(), pageName: "Trash", path: "/trash", class: "fa fa-trash" },
];

export const Sidebar = () => {
  const [sidebox, setsidebox] = useState(sideboxData);
  const makeActive = (id) => {
    const newsidebox = sidebox.map((item) =>
      item.id === id
        ? { ...item, active: "sidebar-sub-active" }
        : { ...item, active: "" }
    );
    setsidebox(newsidebox);
  };
  return (
    <div className="sidebar-main">
      <form>
        {sidebox.map((item) => {
          return (
            <div key={item.id}>
              <Link to={item.path} onClick={() => makeActive(item.id)}>
                <div className={`sidebar-sub ${item.active}`}>
                  <i className={item.class} aria-hidden="true"></i>
                  <span className="sidebar-name">{item.pageName}</span>
                </div>
              </Link>
            </div>
          );
        })}
        <button className="mantra-button mantra-primary-btn note-button">
          Create New Note
        </button>
      </form>
    </div>
  );
};
