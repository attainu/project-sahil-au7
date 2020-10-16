//Validators File it will contain Course validators

import { check, body } from "express-validator";
import Error from "../errorHandlers/CustomError";

const validator = {};

//==========================================Signup Validator==========================================
validator.create = [
  //Check title
  check("title", "Invalid title").isString(),

  //Check if Description is valid
  check("description", "Invalid Description").isString(),

];

validator.update = [
  //These fields user can't update
  check("_id", "Cannot update id").isEmpty(),

  check("created_at", "Cannot update created_at").isEmpty(),


  //Check title
  check("title", "Invalid Title").isString(),
  
  //Check if Description is valid
  check("description", "Invalid Description").isString(),

];

export default validator;
