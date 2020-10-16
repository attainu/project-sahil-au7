
import User from "../models/userModel";
import Course from "../models/courseModel";

const services = {};


//==========================================Enroll Course Service==========================================

services.enrollCourse = (_id, id) =>
  new Promise(async (res, rej) => {
    try {
      const course = await Course.findById(id)
      const check = course.users.filter((i) => _id == i)
      if (check.length==0) {
        await Course.findByIdAndUpdate(id, { $push: { users: _id } }, { new: true });
        const newEnrolled = course.enrolled + 1
        course.enrolled = newEnrolled;
        await course.save();
        
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
      }

      const newCourse = await Course.findById(id)
      
      res(newCourse);
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

      req.course_id = course._id;

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
      const user = await User.findById({ _id }).populate("myCourses");

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

