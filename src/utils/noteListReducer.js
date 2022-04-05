import axios from "axios";

export const noteListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE_DATA":
      return { ...state, noteList: action.payload.value };
    case "ADD_ARCHIVE_DATA":
      return { ...state, archiveData: action.payload.value };
    case "ADD_TRASH_DATA":
      return { ...state, trashData: action.payload.value };
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
        trashData: [
          ...state.trashData,

          ...state.noteList
            .map((item) =>
              item.id === action.payload.value
                ? { ...item, istrashed: "true" }
                : item
            )
            .filter((item) => item.id === action.payload.value),
        ],
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
        archiveData: [
          ...state.archiveData,

          ...state.noteList
            .map((item) =>
              item.id === action.payload.value.id
                ? { ...item, isArchived: "true" }
                : item
            )
            .filter((item) => item.id === action.payload.value.id),
        ],
      };
    case "DELETE_NOTE_FROM_ARCHIVE":
      (async () => {
        try {
          await axios.delete(
            `https://my-json-server.typicode.com/Raghav888/mynoteappAPI/archive/${action.payload.value}`
          );
        } catch (err) {
          console.log(err);
        }
      })();
      return {
        ...state,
        archiveData: state.archiveData.filter(
          (item) => item.id !== action.payload.value
        ),
        trashData: [
          ...state.trashData,

          ...state.archiveData
            .map((item) =>
              item.id === action.payload.value
                ? { ...item, istrashed: "true", isArchived: "false" }
                : item
            )
            .filter((item) => item.id === action.payload.value),
        ],
      };
    case "EDIT_NOTE":
      (async () => {
        try {
          await axios.put(
            `https://my-json-server.typicode.com/Raghav888/mynoteappAPI/notes/${action.payload.value.id}`,
            { notes: { ...action.payload.value } },
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
        noteList: state.noteList.map((item) =>
          item.id === action.payload.value.id ? action.payload.value : item
        ),
      };

    case "EDIT_ARCHIVE":
      (async () => {
        try {
          await axios.put(
            `https://my-json-server.typicode.com/Raghav888/mynoteappAPI/archive/${action.payload.value.id}`,
            { archive: { ...action.payload.value } },
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
        archiveData: state.archiveData.map((item) =>
          item.id === action.payload.value.id ? action.payload.value : item
        ),
      };
    default:
      return state;
  }
};
