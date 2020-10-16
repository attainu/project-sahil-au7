export const progressVisibleType = (data) => {
  return {
    type: "VISIBLITY",
    payload: data,
  };
};

/**
 * Progress bar visible
 *
 * @param {history} history
 */
export const isVisible = (isVisible) => {
  return async (dispatch) => {
    dispatch(progressVisibleType(isVisible));
  };
};
