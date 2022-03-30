import axios from "axios";

export const noteListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE_DATA":
      return { ...state, noteList: action.payload.value };
    case "ADD_NOTE":
      (async () => {
        const statusofpost = await axios.post(
          "https://my-json-server.typicode.com/Raghav888/mynoteappAPI/notes",
          { notes: action.payload.value },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        console.log("ds", statusofpost);
      })();

      return { ...state, noteList: [...state.noteList, action.payload.value] };
    default:
      return state;
  }
};
