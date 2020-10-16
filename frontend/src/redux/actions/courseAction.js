import axios from "axios";
import {
  getCourseDetailsType,
  getCoursesType,
  viewCourseType,
  progressVisibleType,
  enrollType,
  myCoursesType,
} from "../actionType";
import process from "../utils/processUtil";

/**
 * Get all courses
 *
 * @param {history} history
 */
export const getCourses = (history) => {
  return async (dispatch) => {
    process(
      async () => {
        dispatch(progressVisibleType(true));

        const { data } = await axios.get(
          "https://educate-india.herokuapp.com/course"
        );

        dispatch(getCoursesType(data));
        dispatch(progressVisibleType(false));
      },
      () => {},
      (error) => {}
    );
  };
};

/**
 * Get course details
 *
 * @param {course id} id
 */
export const getCourseDetails = (id, history) => {
  return async (dispatch) => {
    try {
      dispatch(progressVisibleType(true));

      const { data } = await axios.get(
        `https://educate-india.herokuapp.com/course/${id}`
      );

      dispatch(getCourseDetailsType(data));
      history.push("/course-details");
    } catch (err) {
      dispatch({
        type: "SET_REGISTER_ERRORS",
        payload: err.response.data,
      });
      console.log(err.message);
    } finally {
      dispatch(progressVisibleType(false));
    }
  };
};

/**
 * View course
 *
 * @param {history} history
 */
export const viewCourse = (data, videoId, history) => {
  return async (dispatch) => {
    dispatch(progressVisibleType(true));

    dispatch(viewCourseType(data, videoId));
    history.push("/course");

    dispatch(progressVisibleType(false));
  };
};

/**
 * Enroll course
 *
 * @param {data} data
 * @param {history} history
 */
export const enroll = (id, history) => {
  return async (dispatch) => {
    try {
      dispatch(progressVisibleType(true));

      const { data } = await axios.post(
        `https://educate-india.herokuapp.com/user/course/${id}`
      );

      //Enroll
      dispatch(enrollType(data));
      history.push("/my-course");
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(progressVisibleType(false));
    }
  };
};

/**
 * My courses
 *
 * @param {} history
 */
export const myCourses = (history) => {
  return async (dispatch) => {
    try {
      dispatch(progressVisibleType(true));

      const { data } = await axios.get(
        "https://educate-india.herokuapp.com/user/course"
      );

      dispatch(myCoursesType(data.myCourses));
      history.push("/my-courses");
    } catch (error) {
    } finally {
      dispatch(progressVisibleType(false));
    }
  };
};
