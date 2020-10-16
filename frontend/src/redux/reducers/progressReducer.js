const initialState = {
  isVisible: false,
};

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VISIBLITY":
      return {
        ...state,
        isVisible: action.payload,
      };

    default:
      return state;
  }
};

export default progressReducer;
