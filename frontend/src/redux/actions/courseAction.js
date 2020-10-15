import axios from "axios";

export const getCoursesType = (data) => {
  return {
    type: "GET_COURSES",
    payload: data,
  };
};

export const getCourses = (history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://educate-india.herokuapp.com/course"
      );

      console.log(data)

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
