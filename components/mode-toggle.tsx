"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const handleLightMode = () => {
        setTheme("light");
    };

    const handleDarkMode = () => {
        setTheme("dark");
    };

    const handleClick = () => {
        if (theme === "dark") {
            handleLightMode();
        } else {
            handleDarkMode();
        }
    };

    return (
        <Button variant="outline" size="icon" onClick={handleClick}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
}
