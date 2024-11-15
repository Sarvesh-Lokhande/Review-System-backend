import companyModel from "../models/company.js";
export const createCompany=async(req,res)=>{
    try {
        const { name,location,industry,email } = req.body;
        const company = new companyModel({
            name: name,
            location:location,
            industry:industry,
            email:email
        })
        const savedCompany = await company.save();
        res.json({savedCompany});
    } catch (error) {
        res.json("error...");
    }
    
}
export const getAllCompanies=async(req,res)=>{
    try {
      const getCompanies=  await companyModel.find();
      res.json({getCompanies});
    } catch (error) {

        res.json({error:"Cannot fetch data"});
        console.log(error);
    }
}