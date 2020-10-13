/**
 * This is routes index file.
 * It contains all the routes.
 */
import express from "express";

import userRoutes from "../routes/userRoutes";
import passwordResetRoutes from "./passwordResetRoutes";
import courseRoutes from "../routes/courseRoutes";

import authorize from "../middleware/auth";

const routes = express.Router();

//User Routes
routes.use("/user", userRoutes);

//Course Routes
routes.use("/course", courseRoutes);

//User password reset
routes.use("/user/passwordReset", passwordResetRoutes);

export default routes;
