"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import Button from "./components/atoms/button";
import { login } from "@/app/api/actions/login/actions";
import Image from "next/image";
import LinkButton from "./components/molecules/link-button";

export default function Page() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const supabase = createClient();
    const images = [
        {
            src: "/d1.png",
            alt: "Demo",
            description: "Unlock your unique music persona!",
        },
        {
            src: "/d2.png",
            alt: "Generate Persona",
            description: "Explore previously generated personas!",
        },
    ];

    async function client() {
        const {
            data: { user },
        } = await supabase.auth.getUser();
        if (user?.id) {
            console.log(user);
            setLoggedIn(true);
        }
    }

    useEffect(() => {
        client()
            .then((_) => {
                console.log("checked user");
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex(
                    (prevIndex) => (prevIndex + 1) % images.length,
                );
                setFade(true);
            }, 750);
        }, 5000);

        return () => clearInterval(interval);
    });

    const { src, alt, description } = images[currentImageIndex];

    return (
        <div className="text-center fade-in min-h-[70vh]">
            <header>
                <h1 className="text-4xl font-bold">Welcome to Persona.fm</h1>
                <p className="text-lg mt-2">
                    Discover AI-powered insights into your Last.fm listening
                    habits.
                </p>
            </header>
            <br />
            <br />
            {!loggedIn && !loading && (
                <form>
                    <Button
                        variant="primary"
                        text="Sign In with Google"
                        formAction={login}
                    />
                </form>
            )}
            {loggedIn && !loading && (
                <p className="text-xl fade-in">
                    <LinkButton
                        variant="primary"
                        text="Go to home"
                        href="/home"
                    />
                </p>
            )}
            <br />
            <br />
            <div
                className={`flex justify-center relative transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
            >
                <Image
                    src={src}
                    height="600"
                    width="800"
                    alt={alt}
                    className="rounded-lg shadow-xl"
                />
                <div className="text-sm md:text-md absolute top-[2px] md:top-3 bg-black bg-opacity-50 text-white px-2 py-1 md:py-2 md:px-4 rounded-lg">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
