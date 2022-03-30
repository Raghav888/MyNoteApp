import React from "react";
import { useNote } from "../../context/note-context";
import { Notepad } from "../Notepad/Notepad";
import { Searchbar } from "../SearchBar/Searchbar";
import "./note.css";
export const Note = () => {
  const { filterData } = useNote();

  return (
    <div>
      <Searchbar home={"Home"} />
      <div className="note-page">
        {filterData.map((item) => {
          return <Notepad item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
