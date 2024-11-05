import express from "express"
const router = express.Router();
import {registerUser} from "../controllers/register.controllers.js"
import { diabetes } from "../controllers/diabetes.controllers.js";
import { loginUser } from "../controllers/register.controllers.js";
import { getData } from "../controllers/diabetes.controllers.js";
import { generateDiabetesInsights } from "../controllers/gemini.controller.js";
// import validateToken from "../middleware/validateToken.js";


router.post("/register",registerUser)
router.post("/diabetes", diabetes)
router.post("/login",loginUser)
router.get("/generatereport/",generateDiabetesInsights)
router.get("/getdata/:userId", getData)




export default router