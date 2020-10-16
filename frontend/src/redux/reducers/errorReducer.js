const initialState = {
  message: "",
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default errorReducer;
