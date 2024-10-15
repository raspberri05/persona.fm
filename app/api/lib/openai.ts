import { config } from "dotenv";

config({ path: ".env" });
import jsonData from "./openai.json";
import { rawData } from "@/app/types";

const CalendarEvent = z.object({
    vibe: z.string(),
    mainstream: z.object({
        description: z.string(),
        percent: z.number(),
    }),
    energetic: z.object({
        description: z.string(),
        percent: z.number(),
    }),
});

import OpenAI from "openai";
const openai = new OpenAI();
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

export async function generate(data: rawData[]) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: jsonData.systemInstruction },
                {
                    role: "user",
                    content: JSON.stringify(data),
                },
            ],
            response_format: zodResponseFormat(CalendarEvent, "event"),
        });
        const text = completion.choices[0].message.content;
        console.log(text);
        return text;
    } catch (error) {
        console.error("Error generating content:", error);
        throw error;
    }
}
