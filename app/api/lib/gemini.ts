const { GoogleGenerativeAI } = require("@google/generative-ai");
import { config } from "dotenv";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

config({ path: ".env" });
const genAI = new GoogleGenerativeAI(process.env.GEMINI);
import jsonData from "./gemini.json";
import { rawData } from "@/app/types";

export async function generate(data: rawData[]) {
    const safetySetting = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
    ];
    const model = genAI.getGenerativeModel({
        model: jsonData.model,
        generationConfig: jsonData.generationConfig,
        safetySetting,
        systemInstruction: jsonData.systemInstruction,
    });

    const prompt = JSON.stringify(data);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}
