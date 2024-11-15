import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, email:{
        type:String,
        required:true
    }, pass:{
        type:String,
        required:true
    }, role:{
        type:String,
        enum:["Admin","Student","Alumni"],
        required:true
    }
})

const userModel=mongoose.model("User",userschema)
export default userModel;