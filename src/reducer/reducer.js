const Reducer = (state, action) => {
  if (action.type === "data") {
    return {
      ...state,
      [action.name]: action.value,
    };
  }
};
export default Reducer;
