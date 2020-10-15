import { Schema, model } from "mongoose";

const userModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  contact: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  login_at: {
    type: Date,
    default: Date.now(),
  },
  myCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: "course",
    },
  ],
  passwordResetToken: {
    type: String,
  },
  passwordResetExpires: {
    type: Date,
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userModel.pre(/^find/, function (next) {
  this.populate({
    path: "course",
    select: "-__v",
  });
  next();
});

export default new model("user", userModel);
