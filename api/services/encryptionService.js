import bcrypt from "bcrypt";

const saltRounds = 12;

const bcrypt1 = {};

//Encrpyt
bcrypt1.encrypt = (password) =>
  new Promise(async (res, rej) => {
    try {
      const hash = await bcrypt.hash(password, saltRounds);

      res(hash);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//Verify
bcrypt1.verify = (password, hash) =>
  new Promise(async (res, rej) => {
    try {
      const isVerified = await bcrypt.compare(password, hash);

      res(isVerified);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

export default bcrypt1;
