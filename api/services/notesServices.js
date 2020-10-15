import Notes from "../models/notesModel";

const services = {};
//==========================================Update Notes Detail Service==========================================

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


//==========================================Get Notes Service==========================================
services.getNotes = (id) =>
  new Promise(async (res, rej) => {
    try {
      const notes = await Notes.findById(id);

      res(notes);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

export default services;
