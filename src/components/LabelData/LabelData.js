import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useNote } from "../../context/note-context";
import { tagReducer } from "../../utils/tagReducer";
import { Notepad } from "../Notepad/Notepad";
import { Searchbar } from "../SearchBar/Searchbar";
import "./labeldata.css";
export const LabelData = () => {
  const { noteListState } = useNote();
  const api = "https://my-json-server.typicode.com/Raghav888/mynoteappAPI/tags";

  const [tagstate, tagdispatch] = useReducer(tagReducer, { tagData: [] });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(api);
        tagdispatch({
          type: "ADD_TAG_DATA",
          payload: { value: response.data },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(tagstate);
  return (
    <div>
      <Searchbar />
      <div className="note-page">
        {tagstate.tagData.map((items) => {
          return (
            <div key={items.id}>
              <h1 className="text-align-left label-title">{items.tagName}</h1>

              {noteListState.noteList.some((e) => e.tag === items.tagName) ? (
                noteListState.noteList.map((item2) => {
                  return (
                    items.tagName === item2.tag && (
                      <Notepad item={item2} key={item2.id} />
                    )
                  );
                })
              ) : (
                <div className="label-message">---No data---</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
