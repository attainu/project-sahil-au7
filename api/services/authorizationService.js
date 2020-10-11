import jwt from "jsonwebtoken";

const secret_key = process.env.JWT_SECRET;

const token = {};

//Generate Token
token.generate = (data) =>
  new Promise(async (res, rej) => {
    try {
      //Get only required data
      const obj = {
        _id: data._id,
        created_at: data.created_at,
        login_at: data.login_at,
      };
      console.log(obj);

      const token = jwt.sign(
        {
          ...obj,
        },
        secret_key
      );

      res(token);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

export default token;
