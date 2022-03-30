import { Link } from "react-router-dom";
import React from "react";
import { v4 } from "uuid";
import "./sidebar.css";
import { AddnewNote } from "../Addnewnote/AddnewNote";
import { useNote } from "../../context/note-context";
import axios from "axios";

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
    case: "MOVE_TO_ARCHIVE",
    endpoint: "archive",
  },
  {
    id: v4(),
    pageName: "Trash",
    path: "/trash",
    class: "fa fa-trash",
    case: "MOVE_TO_TRASH",
    endpoint: "trash",
  },
];

export const Sidebar = (props) => {
  const { noteListDisptach } = useNote();

  const fetchData = (calltype, endpoint) => {
    (async () => {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/Raghav888/mynoteappAPI/${endpoint}`
        );
        noteListDisptach({ type: calltype, payload: { value: response.data } });
      } catch (error) {
        console.log(error);
      }
    })();
  };
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
                <div
                  className="sidebar-sub"
                  onClick={() => fetchData(item.case, item.endpoint)}
                >
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
