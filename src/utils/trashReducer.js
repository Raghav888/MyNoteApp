export const trashReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRASH_DATA":
      return { ...state, trashData: action.payload.value };
    default:
      return state;
  }
};
