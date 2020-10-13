
import User from "../models/userModel";
import Course from "../models/courseModel";

const services = {};


//==========================================Enroll Course Service==========================================

services.enrollCourse = (_id, id) =>
  new Promise(async (res, rej) => {
    try {
      const course = await Course.findById(id);

      const myCourse = await User.findOneAndUpdate(
        {
          _id,
        },
        {
          $push: {
            myCourses: course,
          },
        }
      );

      res(course);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

  
  
//==========================================Get Specific Course Service==========================================
services.getMyCourseSpecific = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const course = await Course.findById(_id);

      res(course);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

  
//==========================================Get User Course Service==========================================
services.getMyCourse = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const user = await User.findById(_id);

      res(user);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Delete Course Service==========================================
services.deleteMyCourse = (_id, id) =>
  new Promise(async (res, rej) => {
    try {
      const user = await User.findById(_id);
      const newArr = user.myCourses.filter((i) => id != i);
      user.myCourses = newArr;
      await user.save();

      res(user);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });


export default services;

