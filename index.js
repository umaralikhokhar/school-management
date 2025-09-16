import mongoose from "mongoose";
import express from "express";
import StudentModel from "./Model/StudentModel.js";

const app = express();
app.use(express.json());

const dbConnection = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/school");
        console.log("Db Connected")
    }catch(error){
        console.log("🚀 ~ dbConnection ~ error:", error)
        
    }
}

dbConnection();
app.get("/",async(req, resp) => {
    const studentData = await StudentModel
    resp.send(studentData);
})

app.get("/students/:id", async(req, resp) => {
    const studentData = await StudentModel.find();
    resp.send(studentData);
})

app.post("/save",async(req, resp) => {
    const {name, age, email, course} = req.body
    if(!req.body || !name || !age || !email || !course){
        resp.json({
            message: "data not stroad",
            success: false,
            info:null
        })
        return false;
    }
    const studentData = await StudentModel.create({
        name, age, email, course
    })
    resp.json({
        message: "Data stroad",
        studentData: studentData
    })
})
app.put("/update/:id",async(req, resp) => {
    const id = req.params.id;
    const studentData = await StudentModel.findByIdAndUpdate(id,{
        ...req.body
    })
    resp.json({
        message: "Data was update",
        success:true,
        info:null
    })
})
app.delete("/delete/:id",async(req, resp) => {
    const id = req.params.id;
    const studentData = await StudentModel.findByIdAndDelete(id);
    resp.json({
        message:"data was delete",
        success:true,
        info:null
    })
})

app.listen(3900, ()=> console.log("App is listning on port 3900"));