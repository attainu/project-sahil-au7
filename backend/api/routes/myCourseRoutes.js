
/**
 * This file contains all the User Course routes
 */
import express from "express";
import controller from "../controller/myCourseController";
import validator from "../validators/userValidators";
import { handleValidationErrors } from "../errorHandlers/ErrorHandlers";
import authorize from "../middleware/auth";

const router = express.Router();


//============================================ User Course Routes===============================================================

//POST Enroll Course
router.post("/:id", authorize, controller.enrollCourse);

//GET Get Course details
router.get("/", authorize, controller.getMyCourses);

//Get Specific Course
router.get("/:id", authorize,controller.getMyCourseSpecific);

//DELETE Delete Course
router.delete("/:id", authorize, controller.deleteMyCourse);


export default router;
