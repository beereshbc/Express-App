import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userOrder: { type: Object, default: {} },
  },
  { timestamps: true, minimize: false }
); //minimize is added for save the userOrder as empty

export const Person = mongoose.model("person", personSchema);
