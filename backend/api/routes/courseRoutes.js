/**
 * This file contains all the Course Routes
 */
import express from "express";
import controller from "../controller/courseController";
import validator from "../validators/courseValidator";
import { handleValidationErrors } from "../errorHandlers/ErrorHandlers";
// import authorize from "../middleware/auth";

const router = express.Router();

//POST Create Course
router.post("/create", validator.create,  handleValidationErrors
,controller.create);

//GET Get Course details
router.get("/:id", controller.get);

//GET Get All Course details
router.get("/", controller.getAll);

//UPDATE Course Details
router.patch("/:id",validator.update,  handleValidationErrors
, controller.update);

//DELETE Delete Course
router.delete("/:id", controller.deleteCourse);

export default router;
