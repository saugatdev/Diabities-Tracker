import { Diabetes } from '../models/diabetes.model.js'; 
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateDiabetesInsights = async (req, res) => {
    const { userId } = req.body; // Get userId from the request body

    try {
        // Fetch diabetes records for the user
        const diabetesRecords = await Diabetes.find({ userId }).exec();
        console.log(diabetesRecords);
        

        if (diabetesRecords.length === 0) {
            return res.status(404).json({ message: "No diabetes records found for this user." });
        }

        // Create a prompt using the fetched diabetes records
        const prompt = `act as a diabetes doctor and read me the data and analyse to provide insight to this ${diabetesRecords}  `;

        // Generate content with the AI model
        const result = await model.generateContent(prompt);
        
        // Send the generated content as a response
        res.json({ insights: result.response.text() });
    } catch (error) {
        console.error("Error fetching diabetes data or generating insights:", error);
        res.status(500).send("Error fetching diabetes data or generating insights");
    }
};
