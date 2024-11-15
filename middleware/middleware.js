import userModel from "../models/user.js"
export const isAdmin=async(req,res,next)=>{
    try {
     const{email}=req.body   
     const userinfo=await userModel.findOne({email:email})
     if(userinfo&&userinfo.role=="Admin")
        {
         next();
        }
    else{
        res.status(403).json({
            "message":"Access denied"
        })
    }
    } catch (error) {
        res.status(500).json({
            "message":"Internal server error"
        })
    }
}
export const isStudent=async(req,res,next)=>{
    try {
     const{email}=req.body   
     const userinfo=await userModel.findOne({email:email})
     if(userinfo&&userinfo.role=="Student")
        {
         next();
        }
    else{
        res.status(403).json({
            "message":"Access denied"
        })
    }
    } catch (error) {
        res.status(500).json({
            "message":"Internal server error"
        })
    }
}
export const isAlumni=async(req,res,next)=>{
    try {
     const{email}=req.body   
     const userinfo=await userModel.findOne({email:email})
     if(userinfo&&userinfo.role=="Alumni")
        {
         next();
        }
    else{
        res.status(403).json({
            "message":"Access denied"
        })
    }
    } catch (error) {
        res.status(500).json({
            "message":"Internal server error"
        })
    }
}