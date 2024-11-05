import { Diabetes } from '../models/diabetes.model.js';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export const generateDiabetesInsights = async (req, res) => {
    const { userId } = req.body;

    try {
        const diabetesRecords = await Diabetes.find({ userId }).exec();
        if (diabetesRecords.length === 0) {
            return res.status(404).json({ message: "No diabetes records found for this user." });
        }

        const prompt = `Act as a diabetes doctor. Analyze the following data and provide insights: ${JSON.stringify(diabetesRecords)}`;
        const result = await model.generateContent(prompt);

        const insightsText = result.response.text();  // Make sure to call `text()` to retrieve the response content
        res.json({ insights: { summary: insightsText, recommendations: [], alert: null } });  // Example structure
    } catch (error) {
        console.error("Error fetching diabetes data or generating insights:", error);
        res.status(500).send("Error fetching diabetes data or generating insights");
    }
};

