import express from "express"
const router = express.Router();
import { getAllData } from "../controllers/admin.controllers.js";
import { getUser } from "../controllers/admin.controllers.js";
import seedMiddleware from "../middleware/seedMiddleware.js";

router.get("/getalldata",getAllData)
router.get("/getUser",seedMiddleware,getUser)
export default router