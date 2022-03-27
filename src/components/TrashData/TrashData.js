import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { trashReducer } from "../../utils/trashReducer";

import { Notepad } from "../Notepad/Notepad";
import { Searchbar } from "../SearchBar/Searchbar";

export const TrashData = () => {
  const api =
    "https://my-json-server.typicode.com/Raghav888/mynoteappAPI/trash";

  const [trashstate, trashdispatch] = useReducer(trashReducer, {
    trashData: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(api);
        trashdispatch({
          type: "ADD_TRASH_DATA",
          payload: { value: response.data },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Searchbar />
      <div className="note-page">
        {trashstate.trashData.map((item) => {
          return <Notepad item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
