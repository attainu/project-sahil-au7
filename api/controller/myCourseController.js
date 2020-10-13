
import service from "../services/myCourseService";


const controller = {}

//===============================================================================================
//========================================== My Course ==========================================

//Enroll Course
controller.enrollCourse = async (req, res) => {
  try {
    //Add to My Course
    console.log(req.params.id);
    const course = await service.enrollCourse(req._id, req.params.id);

    res.status(201).json(course);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};


//GET Specific Course
controller.getMyCourseSpecific = async (req, res) => {
  try {
    //Get Specific Course
    const user = await service.getMyCourseSpecific(req.params.id);

    res.status(201).json(user);
  } catch (e) {
    handleErrors(e, res);
  }
};

//Get All My Course
controller.getMyCourses = async (req, res) => {
  try {
    //Get Course
    const user = await service.getMyCourse(req._id);

    res.status(201).json(user);
  } catch (e) {
    handleErrors(e, res);
  }
};

//Delete Course
controller.deleteMyCourse = async (req, res) => {
  try {
    //Delete My Course
    const user = await service.deleteMyCourse(req._id, req.params.id);

    res.status(201).json(user);
  } catch (e) {
    handleErrors(e, res);
  }
};


export default controller;
