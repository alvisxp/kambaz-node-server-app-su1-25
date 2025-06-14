import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("Enrollment", schema);
export default model;