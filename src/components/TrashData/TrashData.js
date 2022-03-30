import React from "react";
import { useNote } from "../../context/note-context";

import { Notepad } from "../Notepad/Notepad";
import { Searchbar } from "../SearchBar/Searchbar";

export const TrashData = () => {
  const { noteListState } = useNote();

  return (
    <div>
      <Searchbar />
      <div className="note-page">
        {noteListState.trashData.map((item) => {
          return (
            <div key={item.id}>
              <Notepad item={item} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};
