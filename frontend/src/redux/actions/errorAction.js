import { errorType } from "../actionType";

/**
 * Error visible
 */
export const isVisible = (message) => {
  return async (dispatch) => {
    dispatch(errorType(message));
  };
};
