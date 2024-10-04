import express from "express"
const router = express.Router();
import {registerUser} from "../controllers/register.controllers.js"
import { diabetes } from "../controllers/diabetes.controllers.js";
import { getData } from "../controllers/diabetes.controllers.js";
router.post("/register",registerUser)
router.post("/diabetes", diabetes)
router.get("/getdata/:userId",getData)



export default router