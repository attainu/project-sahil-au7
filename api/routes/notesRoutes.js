/**
 * This file contains all the Notes routes
 */
import express from "express";
import controller from "../controller/notesController";
import authorize from "../middleware/auth";

const router = express.Router();



//POST Create Notes
router.post(
    "/:id",
    authorize,
  controller.createNotes
);

//PATCH Notes Creation
router.patch(
    "/:id",
    authorize,
  controller.updateNotes
);

//GET Get Note
router.get("/:id", authorize, controller.getNotes);

export default router;
