import mongoose, { Schema } from "mongoose";

const diabetesSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Register",
        required: true,
    },
    bloodSugarLevel: {
        type: Number,
        required: true,
    },
    measurementType: {
        type: String,
        enum: ["fasting", "post_meal", "random"],
        required: true,
    }
}, 
{
    timestamps: true // Correct place for the timestamps option
});

export const Diabetes = mongoose.model("Diabetes", diabetesSchema);
