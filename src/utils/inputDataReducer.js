export const inputDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TITLE":
      return { ...state, title: action.payload.value };
    case "ADD_DATA":
      return { ...state, data: action.payload.value };
    case "ADD_TAG":
      return { ...state, tag: action.payload.value };
    case "ADD_PRIORITY":
      return { ...state, priority: Number(action.payload.value) };
    case "ADD_CARDCOLOR":
      return { ...state, cardcolor: action.payload.value };
    case "ID":
      return { ...state, id: action.payload.value };
    case "ARCHIVE_DATA":
      return { ...state, archive: action.payload.value };
    case "CLEAR":
      return {
        ...state,
        title: null,
        data: null,
        tag: "WORK",
        priority: 1,
        cardcolor: "white-box",
        id: null,
        archive: false,
      };
    default:
      return state;
  }
};
