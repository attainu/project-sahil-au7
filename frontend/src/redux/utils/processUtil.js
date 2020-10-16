import { progressVisibleType } from "../actionType";

/**
 * This utils function wraps the process in a try catch block
 * and handle the display of progress
 */
function process(action) {
  try {
    //Perform action
    action();
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export default process;
