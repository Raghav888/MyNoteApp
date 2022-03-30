import axios from "axios";
import {
  compose,
  dataFilterbytag,
  sortDate,
  sortPriority,
} from "../utils/filterSort";
import { noteListReducer } from "../utils/noteListReducer";
const { createContext, useContext, useEffect, useReducer } = require("react");

const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
  const api =
    "https://my-json-server.typicode.com/Raghav888/mynoteappAPI/notes";
  const [noteListState, noteListDisptach] = useReducer(noteListReducer, {
    noteList: [],
    sortbydate: false,
    sortbypriority: false,
    tags: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(api);
        noteListDisptach({
          type: "ADD_NOTE_DATA",
          payload: { value: response.data },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const filterData = compose(
    noteListState,
    sortDate,
    sortPriority,
    dataFilterbytag
  );

  return (
    <NoteContext.Provider
      value={{ filterData, noteListDisptach, noteListState }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);
export { NoteContextProvider, useNote };
