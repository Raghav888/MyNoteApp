export const archiveReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ARCHIVE_DATA":
      return { ...state, archiveData: action.payload.value };
    default:
      return state;
  }
};
