
const initialState = {
  courses: [],
  courseDetails: {},
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...state,
        courses: action.payload,
      };

    case "COURSE_DETAILS":
      return {
        ...state,
        courseDetails: action.payload,
      };

    default:
      return state;
  }
};

export default courseReducer;
