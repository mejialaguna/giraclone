import mongoose, { Model, Schema } from "mongoose";
import { Entry } from "../interfaces";

interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number },
  status: {
    type: String,
    //   validando que solamente esos values son permitidos cuando se esten mandando a la base de datos.
    enum: {
      values: ["pending", "in-progress", "finished"],
      message: "{VALUE} no es permitido",
    },
  },
});

const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default EntryModel;
