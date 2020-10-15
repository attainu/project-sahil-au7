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
  controller.updateNotes
);

// //POST Delete Login
// router.delete(
//     "/delete",
//     authorize,
//   controller.delete
// );

//GET Get Notes
router.get("/:id", authorize, controller.getNotes);

export default router;
