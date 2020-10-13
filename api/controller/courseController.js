import service from "../services/courseService";
import { handleErrors } from "../errorHandlers/ErrorHandlers";

const controller = {};

//Create Course
controller.create = async (req, res) => {
  try {
    //Create new course
    const course = await service.create(req.body);

    res.status(201).json(course);
  } catch (e) {
    handleErrors(e, res);
  }
};

//Get Course details
controller.get = async (req, res) => {
  try {
    //Get Course
    const course = await service.getCourse(req.params.id);

    res.status(201).json(course);
  } catch (e) {
    handleErrors(e, res);
  }
};

//Get All Course details
controller.getAll = async (req, res) => {
  try {
    //Get All Course
    const course = await service.getAllCourse();

    res.status(201).json(course);
  } catch (e) {
    handleErrors(e, res);
  }
};

//UPDATE Course Details
controller.update = async (req, res) => {
  try {
    const course = await service.updateCourse(req.params.id, req.body);

    res.status(201).json(course);
  } catch (e) {
    handleErrors(e, res);
  }
};

//Delete Course
controller.deleteCourse = async (req, res) => {
  try {
    //Delete a course
    const course = await service.deleteAddress(req.params.id);

    res.status(201).json(course);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

export default controller;
