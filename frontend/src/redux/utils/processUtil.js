import { progressVisibleType } from "../actionType";

/**
 * This utils function wraps the process in a try catch block
 * and handle the display of progress
 */
async function process(action, onSuccess, onFailure) {
  try {
    //Perform action
     action();
    onSuccess();
  } catch (error) {
    console.log(error);
    onFailure(error);
  } finally {
  }
}

export default process;
