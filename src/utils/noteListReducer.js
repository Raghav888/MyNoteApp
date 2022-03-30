import axios from "axios";

export const noteListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE_DATA":
      return { ...state, noteList: action.payload.value };
    case "ADD_NOTE":
      (async () => {
        await axios.post(
          "https://my-json-server.typicode.com/Raghav888/mynoteappAPI/notes",
          { notes: action.payload.value },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
      })();

      return { ...state, noteList: [...state.noteList, action.payload.value] };
    case "SORT_BY_PRIORITY":
      return {
        ...state,
        sortbypriority: !state.sortbypriority,
        sortbydate: false,
      };
    case "SORT_BY_DATE":
      return { ...state, sortbydate: !state.sortbydate, sortbypriority: false };
    case "CLEAR_FILTER":
      return { ...state, sortbydate: false, sortbypriority: false, tags: [] };
    case "TAG_FILTER":
      const isAdded = state.tags.find((item) => item === action.payload.value);
      if (isAdded === undefined) {
        return {
          ...state,
          tags: [...state.tags, action.payload.value],
        };
      } else {
        const newTag = state.tags.filter(
          (item) => item !== action.payload.value
        );
        return { ...state, tags: newTag };
      }
    case "DELETE_NOTE":
      (async () => {
        await axios.delete(
          `https://my-json-server.typicode.com/Raghav888/mynoteappAPI/notes/${action.payload.value}`
        );
      })();
      return {
        ...state,
        noteList: state.noteList.filter(
          (item) => item.id !== action.payload.value
        ),
      };
    default:
      return state;
  }
};
