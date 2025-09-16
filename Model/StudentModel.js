import mongoose from "mongoose";
import studentSchema from "../Schema/StudentSchema.js";

const StudentModel = mongoose.model("students",studentSchema);

export default StudentModel