export const tagReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TAG_DATA":
      return { ...state, tagData: action.payload.value };
    default:
      return state;
  }
};
