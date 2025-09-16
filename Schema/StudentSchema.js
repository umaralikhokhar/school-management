import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    course:String
})

export default studentSchema