import asyncHandler from "express-async-handler"
import {Diabetes} from "../models/diabetes.model.js"

export const diabetes = asyncHandler(async(req,res)=>{
    const {userId, bloodSugarLevel, measurementType} = req.body;

    if(!userId || !bloodSugarLevel || !measurementType){
        return res.status(400).json({message:"All fields are required"})
    }

const newDiabetes = await Diabetes.create({
    userId,
    bloodSugarLevel,
    measurementType
});

if (newDiabetes){
    res.status(201).json({
        _id: newDiabetes._id,
        bloodSugarLevel: newDiabetes.bloodSugarLevel,
        measurementType:newDiabetes.measurementType
    });
    
    }

    else{
        res.status(400).json({
            message:"Invalid Data"
        })
    }


})



export const getData = asyncHandler(async(req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ message: "UserID is required" });
    }

    const records = await Diabetes.find({ userId }); 

    if (records.length > 0) {
        return res.status(200).json(records); 
    } else {
        return res.status(404).json({ message: "No records found" }); 
    }
});
