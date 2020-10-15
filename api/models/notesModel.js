import { Schema, model } from "mongoose";

const notesModel = new Schema({
  text: {
    type: String,
    default:""
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "course",
    },
    ],
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});


export default new model("notes", notesModel);
