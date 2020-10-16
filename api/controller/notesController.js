
import service from "../services/notesServices";
import { handleErrors } from "../errorHandlers/ErrorHandlers";

const controller = {};


//UPDATE Notes
controller.createNotes = async (req, res) => {
    try {
        const notes = await service.createNotes(req, req.body,req.params.id);

        res.status(201).json(notes);
    } catch (e) {
        handleErrors(e, res);
    }
};

//UPDATE Notes
controller.updateNotes = async (req, res) => {
    try {
        const notes = await service.updateNotes(req, req.body,req.params.id,);

        res.status(201).json(notes);
    } catch (e) {
        handleErrors(e, res);
    }
};

//Get Notes
controller.getNotes = async (req, res) => {
  try {
    //Get Notes
    const notes = await service.getNotes(req,req.params.id);

    res.status(200).json(notes);
  } catch (e) {
    handleErrors(e, res);
  }
};

// //Delete Course
// controller.deleteMyCourse = async (req, res) => {
//   try {
//     //Delete My Course
//     const user = await service.deleteMyCourse(req._id, req.params.id);

//     res.status(201).json(user);
//   } catch (e) {
//     handleErrors(e, res);
//   }
// };

export default controller;
