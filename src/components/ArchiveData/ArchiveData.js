import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { archiveReducer } from "../../utils/archiveReducer";
import { Notepad } from "../Notepad/Notepad";
import { Searchbar } from "../SearchBar/Searchbar";

export const ArchiveData = () => {
  const api =
    "https://my-json-server.typicode.com/Raghav888/mynoteappAPI/archive";

  const [archivestate, archivedispatch] = useReducer(archiveReducer, {
    archiveData: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(api);
        archivedispatch({
          type: "ADD_ARCHIVE_DATA",
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
        {archivestate.archiveData.map((item) => {
          return <Notepad item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
