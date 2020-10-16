import axios from "axios";
import {
  getCourseDetailsType,
  getCoursesType,
  viewCourseType,
  progressVisibleType,
  enrollType,
  deleteCourseType,
  myCoursesType,
  getNotesType,
  saveNotesType,
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
      history.push("/my-courses");
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(progressVisibleType(false));
    }
  };
};

/**
 * Enroll course
 *
 * @param {data} data
 * @param {history} history
 */
export const deleteCourse = (id, history) => {
  return async (dispatch) => {
    try {
      dispatch(progressVisibleType(true));

      const { data } = await axios.delete(
        `https://educate-india.herokuapp.com/user/course/${id}`
      );

      console.log(data);

      //Enroll
      dispatch(deleteCourseType(true));
      history.push("/my-courses");
    } catch (e) {
      console.log(e);
      dispatch(deleteCourseType(false));
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

/**
 * Get notess
 *
 * @param {history} history
 */
export const getNotes = (id, history) => {
  console.log(id , "get");
  return async (dispatch) => {
    try {
      dispatch(progressVisibleType(true));

      const { data } = await axios.get(
        `https://educate-india.herokuapp.com/user/course/notes/${id}`
      );

      dispatch(getNotesType(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(progressVisibleType(false));
    }
  };
};

/**
 * update notess
 *
 * @param {history} history
 */
export const updateNotes = (notes, id, history) => {
  console.log(id , "update");
  return async (dispatch) => {
    try {
      dispatch(progressVisibleType(true));

      const {
        data,
      } = await axios.patch(
        `https://educate-india.herokuapp.com/user/course/notes/${id}`,
        { text: notes }
      );

      dispatch(saveNotesType(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(progressVisibleType(false));
    }
  };
};
