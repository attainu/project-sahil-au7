const initialState = {
  courses: [],
  courseDetails: {},
  viewCourse: {},
  videoId: {},
  myCourses: [],
  isDeleted: false,
  notes: {},
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

    case "VIEW_COURSE":
      return {
        ...state,
        viewCourse: action.payload,
      };

    case "MY_COURSES":
      return {
        ...state,
        myCourses: action.payload,
      };

    case "DELETE_COURSE":
      return {
        ...state,
        isDeleted: action.payload,
      };

    case "UPDATE_COURSE":
      return {
        ...state,
        notes: action.payload,
      };

    case "SAVE_NOTE":
      return {
        ...state,
        notes: action.payload,
      };

    default:
      return state;
  }
};

export default courseReducer;
