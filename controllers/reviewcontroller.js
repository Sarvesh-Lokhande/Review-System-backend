import ReviewModel from '../models/reviews.js';  
import companyModel from '../models/company.js';   
export const createReview = async (req, res) => {  
  try {  
    const { company, email, reviews } = req.body;  
    const companyinfo = await companyModel.findOne({ name: company });
if (!companyinfo) {
  return res.status(404).json({ message: "Company not found" });
}


    const reviewObj = new ReviewModel({  
      company:companyinfo.id,  
      email,  
      reviews,  
    });  
   
    
    const savedReviews = await reviewObj.save();  
   
    const updatedCompany =await companyModel.findByIdAndUpdate(  companyinfo.id,  { $push: { reviews: savedReviews._id } },  { new: true }  
    )  .populate("reviews")  .exec();  
   
    res.json({ company: updatedCompany });  
  } catch (error) {  
    res.status(500).json({ message: "Error while adding Review " });
    console.log(error)  
  }  
};  
   
export const getAllReviews=async(req,res)=>{  
  try{  
    const reviews=await ReviewModel.find()  
    res.json({  
      reviews  
})  
}  
catch(error)  
{  
return res.status(400).json({ 
error:"error while fetching post",  
})  
}  
}