/**
 * This file contains all the Notes routes
 */
import express from "express";
import controller from "../controller/notesController;
import authorize from "../middleware/auth";

const router = express.Router();

//PATCH Notes Creation
router.patch(
    "/update",
    authorize,
  controller.update
);

// //POST Delete Login
// router.delete(
//     "/delete",
//     authorize,
//   controller.delete
// );

//GET Get USER details
router.get("/", authorize, controller.get);

export default router;
