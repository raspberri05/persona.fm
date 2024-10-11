import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#312F2F",
                    secondary: "#D3D0CB",
                    tertiary: "#276FBF",
                    error: "#BA2C73",
                    success: "#339989",
                },
            },
        ],
    },
};
export default config;
