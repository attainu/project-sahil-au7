import express from "express";
import { handleValidationErrors } from "../errorHandlers/ErrorHandlers";
import passwordResetValidator from "../validators/passwordResetValidator";
import controller from "../controller/passwordResetController";
import model from "../middleware/model";

const router = express.Router();

//POST REQUEST for forget password
router.post(
  "/",
  model,
  passwordResetValidator.forgotPassword,
  handleValidationErrors,
  controller.forgotPassword
);

//POST reset password request
router.patch(
  "/:resetToken",
  model,
  passwordResetValidator.resetPassword,
  handleValidationErrors,
  controller.resetPassword
);

export default router;
