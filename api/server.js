import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const app = require("./app");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`CONNECTED TO : ${port}`);
});
