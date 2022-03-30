import axios from "axios";

export const noteListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE_DATA":
      return { ...state, noteList: action.payload.value };
    case "ADD_NOTE":
      (async () => {
        try {
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
        } catch (err) {
          console.log(err);
        }
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
        try {
          await axios.delete(
            `https://my-json-server.typicode.com/Raghav888/mynoteappAPI/notes/${action.payload.value}`
          );
        } catch (err) {
          console.log(err);
        }
      })();
      return {
        ...state,
        noteList: state.noteList.filter(
          (item) => item.id !== action.payload.value
        ),
        trashDatatemp: [
          ...state.trashDatatemp,

          ...state.noteList
            .map((item) =>
              item.id === action.payload.value
                ? { ...item, istrashed: "true" }
                : item
            )
            .filter((item) => item.id === action.payload.value),
        ],
      };
    case "MOVE_TO_TRASH":
      return {
        ...state,
        trashData: [...state.trashDatatemp, ...action.payload.value],
      };
    case "ARCHIVE_NOTE":
      (async () => {
        try {
          await axios.delete(
            `https://my-json-server.typicode.com/Raghav888/mynoteappAPI/notes/${action.payload.value.id}`
          );
          await axios.post(
            "https://my-json-server.typicode.com/Raghav888/mynoteappAPI/archive",
            { archive: { ...action.payload.value, isArchived: "true" } },
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
      })();
      return {
        ...state,
        noteList: state.noteList.filter(
          (item) => item.id !== action.payload.value.id
        ),
        archiveDatatemp: [
          ...state.archiveDatatemp,

          ...state.noteList
            .map((item) =>
              item.id === action.payload.value.id
                ? { ...item, isArchived: "true" }
                : item
            )
            .filter((item) => item.id === action.payload.value.id),
        ],
      };
    case "MOVE_TO_ARCHIVE":
      console.log(state.archiveDatatemp);
      return {
        ...state,
        archiveData: [...state.archiveDatatemp, ...action.payload.value],
      };
    default:
      return state;
  }
};
