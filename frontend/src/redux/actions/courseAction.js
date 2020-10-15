import axios from "axios";

export const getCoursesType = (data) => {
  return {
    type: "GET_COURSES",
    payload: data,
  };
};

export const getCourseDetailsType = (data) => {
  return {
    type: "COURSE_DETAILS",
    payload: data,
  };
};

/**
 * Get all courses
 * 
 * @param {history} history 
 */
export const getCourses = (history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://educate-india.herokuapp.com/course"
      );

      console.log(data);

      dispatch(getCoursesType(data));
    } catch (err) {
      console.log(err);
      dispatch({
        type: "SET_REGISTER_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in userRegister Action", err.message);
    }
  };
};

/**
 * Get course details
 *
 * @param {course id} id
 */
export const getCourseDetails = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://educate-india.herokuapp.com/course/${id}`
      );

      console.log(data);
      dispatch(getCourseDetailsType(data));
    } catch (err) {
      dispatch({
        type: "SET_REGISTER_ERRORS",
        payload: err.response.data,
      });
      console.log(err.message);
    }
  };
};
