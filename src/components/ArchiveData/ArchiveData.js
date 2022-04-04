import React from "react";

import { Notepad } from "../Notepad/Notepad";
import { Searchbar } from "../SearchBar/Searchbar";

import { useNote } from "../../context/note-context";
export const ArchiveData = () => {
  const { noteListState } = useNote();
  return (
    <div>
      <Searchbar />
      <div className="note-page">
        {noteListState.archiveData.map((item) => {
          return <Notepad item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
