import { progressVisibleType } from "../actionType";
  

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
