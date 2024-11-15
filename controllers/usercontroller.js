import userModel from "../models/user.js";
const createAdmin=async(req,res)=>{
    try {
        const { name, email, pass } = req.body;
        const user = new userModel({
            name: name,
            email: email,
            pass: pass,
            role: "Admin"
        })
        const savedUser = await user.save();
        res.json({savedUser});
    } catch (error) {
        res.json("error...");
    }
    
}
const createStudent=async(req,res)=>{
    try {
        const { name, email, pass } = req.body;
        const user = new userModel({
            name: name,
            email: email,
            pass: pass,
            role: "Student"
        })
        const savedUser = await user.save();
        res.json({savedUser});
    } catch (error) {
        res.json("error...");
    }
    
}
const createAlumni=async(req,res)=>{
    try {
        const { name, email, pass } = req.body;
        const user = new userModel({
            name: name,
            email: email,
            pass: pass,
            role: "Alumni"
        })
        const savedUser = await user.save();
        res.json({savedUser});
    } catch (error) {
        res.json("error...");
    }
    
}

export const getAllUsers=async(req,res)=>{
    try {
      const getUsers=  await userModel.find();
      res.json({getUsers});
    } catch (error) {

        res.json({error:"Cannot fetch data"});
        console.log(error);
    }
}
export { createAdmin, createStudent, createAlumni };
