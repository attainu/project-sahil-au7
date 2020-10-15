import { Schema, model } from "mongoose";

const notesModel = new Schema({
  text: {
    type: String,
    default:""
  },
  course: [
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
  created_at: {
    type: Date,
    default: Date.now(),
  },
});


export default new model("notes", notesModel);
