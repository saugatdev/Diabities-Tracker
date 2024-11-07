import express from "express"
const router = express.Router();
import {registerUser} from "../controllers/register.controllers.js"
import { diabetes } from "../controllers/diabetes.controllers.js";
import { loginUser,getUser } from "../controllers/register.controllers.js";
import { getData } from "../controllers/diabetes.controllers.js";
import { generateDiabetesInsights } from "../controllers/gemini.controller.js";
// import validateToken from "../middleware/validateToken.js";

router.post("/register",registerUser)
router.post("/diabetes", diabetes)
router.post("/login",loginUser)
router.post("/generatereport",generateDiabetesInsights)
router.get("/getdata/:userId", getData)
router.get("/getuser/", getUser)




export default router