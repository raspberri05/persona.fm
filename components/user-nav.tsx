"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import CustomAvatar from "@/components/custom-avatar";
import CustomDropdownMenuLabel from "./custom-dropdown-menu-label";

export default function UserNav() {
    const [image, setImage] = useState("");

    useEffect(() => {
        fetch("/api/user/profile", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setImage(data.image[1]["#text"]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                >
                    <CustomAvatar imageSrc={image} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <CustomDropdownMenuLabel />
                <DropdownMenuSeparator />
                <a href="/settings">
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </a>
                <a href="/api/auth/logout">
                    <DropdownMenuItem>Log Out</DropdownMenuItem>
                </a>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
