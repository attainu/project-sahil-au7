import Course from "../models/courseModel";

const services = {};

//==========================================Create Course Service==========================================
services.create = (data) =>
  new Promise(async (res, rej) => {
    try {
      const course = await new Course({
        ...data,
      }).save();

      res({
        course,
      });
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Get Course details Service==========================================
services.getCourse = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const course = await Course.findById(_id);

      res(course);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Get ALl Course details Service==========================================
services.getAllCourse = () =>
  new Promise(async (res, rej) => {
    try {
      const course = await Course.find();

      res(course);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Update Course Detail Service==========================================
services.updateCourse = (_id, data) =>
  new Promise(async (res, rej) => {
    try {
      //Updating the details to the database
      const course = await Course.findByIdAndUpdate(
        _id,
        {
          ...data,
          $set: {
            lastUpdated: Date.now(), //Update login_at
          },
        },
        {
          new: true,
        }
      );

      res(course);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Delete Course Service==========================================

services.deleteAddress = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const course = await Course.findByIdAndDelete(_id);
      res(course);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

export default services;
