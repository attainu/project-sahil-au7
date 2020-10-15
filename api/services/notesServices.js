import Notes from "../models/notesModel";
import encryptionService from "../services/encryptionService";

const services = {};

//==========================================Get User Service==========================================
services.getNotes = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const user = await User.findById(_id);

      res(user);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Update User Detail Service==========================================
services.updateNotes = (_id, data) =>
  new Promise(async (res, rej) => {
    try {

      //Updating the hash to database
      const notes = await User.findByIdAndUpdate(
        _id,
        {
          password: hash,
          ...remData,
        },
        {
          returnNewDocument: true,
        }
      );

      res(notes);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });



export default services;
