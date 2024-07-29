const { GoogleGenerativeAI } = require("@google/generative-ai");
import { config } from "dotenv";

config({ path: ".env" });
const genAI = new GoogleGenerativeAI(process.env.GEMINI);
const jsonData = require("./gemini.json");

export async function generate(data: any) {
    const model = genAI.getGenerativeModel(jsonData);

    const prompt = JSON.stringify(data);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}
