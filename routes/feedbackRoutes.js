import {createAdmin,createAlumni,createStudent,getAllUsers} from "../controllers/usercontroller.js";
import { createCompany,getAllCompanies } from "../controllers/companycontroller.js";
import { createReview ,getAllReviews} from "../controllers/reviewcontroller.js";
import { likeReviews } from "../controllers/likescontroller.js";
import express from "express";
import { isAdmin,isAlumni,isStudent } from "../middleware/middleware.js";

const router=express.Router();
router.post("/admin/create",createAdmin);
router.post("/alumni/create",createAlumni);
router.post("/student/create",createStudent);
router.get("/users/get",getAllUsers);

router.post("/company/create",isAdmin,createCompany);
router.get("/company/get",getAllCompanies);

router.post("/review/post",isAlumni,createReview);
router.get("/review/get",getAllReviews);

router.post("/review/like",isStudent,likeReviews)

export default router;