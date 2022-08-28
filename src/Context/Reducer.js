const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_VALUE":
      return {
        ...state,
        inputValue: [
          ...state.inputValue,

          {
            name: action.payload.name,
            id: action.payload.id,
          },
        ],
      };
    case "REMOVE_ITEM":
        return{
            ...state,
            inputValue: state.inputValue.filter(input => input.id !== action.payload)
        }
    default:
      return state;
  }
};

export default Reducer;
