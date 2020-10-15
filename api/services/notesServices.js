import Notes from "../models/notesModel";

const services = {};

//==========================================Get User Service==========================================
services.getNotes = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const user = await Notes.findById(_id);

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
      const notes = await Notes.findByIdAndUpdate(
        _id,
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
