import express from "express";
import morgan from "morgan";
import connect from "./config/db_connect";
import routes from "./routes/index";
import cors from "cors";
import { handleGlobalErrors } from "./errorHandlers/ErrorHandlers";

//Create an instance of express app
const app = express();

//Connect to MongoDB
connect(
  process.env.DATABASE_CONNECT.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  )
);

app.use(cors())
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("dev"));
app.use("/", routes);
app.use("/", handleGlobalErrors);

module.exports = app;
