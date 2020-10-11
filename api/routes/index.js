/**
 * This is routes index file.
 * It contains all the routes.
 */
import express from "express";

import userRoutes from "../routes/userRoutes";
import passwordResetRoutes from "./passwordResetRoutes";

import authorize from "../middleware/auth";

const routes = express.Router();

//User Routes
routes.use("/user", userRoutes);

// //Shopping routes
// routes.use("/user/shop", authorize, shoppingRoutes);

// //Address routes
// routes.use("/user/address", authorize, addressRoutes);

//User password reset
routes.use("/user/passwordReset", passwordResetRoutes);

//============================THIS IS AN ADMIN API ROUTE=====================================
//Add Products to algolia
// routes.use("/product", productRoutes);
//============================THIS IS AN ADMIN API ROUTE=====================================

export default routes;
