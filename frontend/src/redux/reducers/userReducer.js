const initialState = {
  user: {},
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS_DATA":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "DELETE_USERS_DATA":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
