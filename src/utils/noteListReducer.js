export const noteListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE_DATA":
      return { ...state, noteList: action.payload.value };
    default:
      return state;
  }
};
