/**
 * Get all courses
 * 
 * @param {data} data 
 */
export const getCoursesType = (data) => {
  return {
    type: "GET_COURSES",
    payload: data,
  };
};

/**
 * Get course details
 * 
 * @param {data} data 
 */
export const getCourseDetailsType = (data) => {
  return {
    type: "COURSE_DETAILS",
    payload: data,
  };
};

/**
 * View single course
 * 
 * @param {data} data 
 * @param {video Id} videoId 
 */
export const viewCourseType = (data, videoId) => {
  return {
    type: "VIEW_COURSE",
    payload: { ...data, videoId },
  };
};

/**
 * User login 
 * 
 * @param {data} data 
 */
export const loginUser = (data) => {
  return {
    type: "SET_USERS_DATA",
    payload: data,
  };
};

/**
 * User logout
 * 
 * @param {data} data 
 */
export const userLogoutHelper = (data) => {
  return {
    type: "DELETE_USERS_DATA",
    payload: data,
  };
};

/**
 * Progress Bar visibility
 * 
 * @param {data} data 
 */
export const progressVisibleType = (data) => {
  return {
    type: "VISIBLITY",
    payload: data,
  };
};
