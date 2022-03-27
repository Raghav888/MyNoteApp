import React from "react";
import { useNote } from "../../context/note-context";
import { Notepad } from "../Notepad/Notepad";
import { Searchbar } from "../SearchBar/Searchbar";
import "./note.css";
export const Note = () => {
  const { noteListState } = useNote();

  return (
    <div>
      <Searchbar />
      <div className="note-page">
        {noteListState.noteList.map((item) => {
          return <Notepad item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
