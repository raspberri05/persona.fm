"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

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
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={image} alt="@shadcn" />
                        <AvatarFallback></AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {getCookie("username")}
                        </p>
                    </div>
                </DropdownMenuLabel>
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
