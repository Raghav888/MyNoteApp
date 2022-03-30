import axios from "axios";
import { noteListReducer } from "../utils/noteListReducer";
const { createContext, useContext, useEffect, useReducer } = require("react");

const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
  const api =
    "https://my-json-server.typicode.com/Raghav888/mynoteappAPI/notes";
  const [noteListState, noteListDisptach] = useReducer(noteListReducer, {
    noteList: [],
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

  return (
    <NoteContext.Provider value={{ noteListState, noteListDisptach }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);
export { NoteContextProvider, useNote };
