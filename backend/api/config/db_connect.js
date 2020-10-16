import mongoose from "mongoose";

export default (db) => {
  const connect = () => {
    mongoose
      .connect(db, {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .then(() => {
        return console.log("CONNECTED TO DATABASE");
      })
      .catch((err) => {
        console.log("ERROR : ", err.message);
      });
  };
  connect();
};
