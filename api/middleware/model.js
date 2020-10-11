/**
 * This middleware detects the model from the url
 */

import User from "../models/userModel";

export default (req, res, next) => {
  try {
    //Get base url
    const baseUrl = req.baseUrl.split("/")[1];

    //Pass the model in request object
    req.model = User;

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
