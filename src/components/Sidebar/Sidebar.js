import { Link } from "react-router-dom";
import React from "react";
import { v4 } from "uuid";
import "./sidebar.css";
import { AddnewNote } from "../Addnewnote/AddnewNote";

const sideboxData = [
  {
    id: v4(),
    pageName: "Home",
    path: "/",
    class: "fa fa-home",
  },
  { id: v4(), pageName: "Labels", path: "/label", class: "fa fa-tag" },
  {
    id: v4(),
    pageName: "Archive",
    path: "/archive",
    class: "fa fa-archive",
  },
  {
    id: v4(),
    pageName: "Trash",
    path: "/trash",
    class: "fa fa-trash",
  },
];

export const Sidebar = (props) => {
  return (
    <div className="sidebar-main">
      <form>
        {sideboxData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                props.name === item.pageName ? "sidebar-sub-active" : null
              }
            >
              <Link to={item.path}>
                <div className="sidebar-sub">
                  <i className={item.class} aria-hidden="true"></i>
                  <span className="sidebar-name">{item.pageName}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </form>
      <AddnewNote />
    </div>
  );
};
