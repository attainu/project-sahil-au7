/**
 * This file contains all the User routes
 */
import express from "express";
import controller from "../controller/userController";
import validator from "../validators/userValidators";
import { handleValidationErrors } from "../errorHandlers/ErrorHandlers";
import authorize from "../middleware/auth";

const router = express.Router();

//POST USER Signup
router.post(
  "/signup",
  validator.signup,
  handleValidationErrors,
  controller.signup
);

//POST USER Login
router.post(
  "/login",
  validator.login,
  handleValidationErrors,
  controller.login
);

//GET Get USER details
router.get("/", authorize, controller.get);

//UPDATE User Details
router.patch(
  "/update",
  validator.update,
  handleValidationErrors,
  authorize,
  controller.update
);

//GET
router.get("/logout", authorize, controller.logout);

//===========================================================================================================

//POST Enroll Course
router.post("/course/:id", authorize, controller.enrollCourse);

//GET Get Course details
// router.get("/:id", controller.getMyCourses);

//DELETE Delete Course
router.delete("/course/:id", controller.deleteMyCourse);

export default router;
