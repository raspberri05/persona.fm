"use client";

import { useEffect, useState } from "react";
import { addUsername } from "./actions";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { UserProfile } from "@/app/components/user-profile";

export default function Page() {
    const [username, setUsername] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    useEffect(() => {
        const temp = getCookie("provider_username");
        setUsername(temp || "");
    }, []);
    return (
        <div>
            <UserProfile />
            <div className="card bg-primary w-80 text-center text-secondary mt-10">
                <div className="card-body">
                    <div className="flex justify-center">
                        <Image
                            src="/images/Lastfm_logo.svg"
                            alt="last.fm logo"
                            width="100"
                            height="10"
                        />
                    </div>
                    <form>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            className="input input-bordered input-primary my-4 text-primary"
                            value={username}
                            onChange={handleChange}
                        />

                        <br />
                        <button formAction={addUsername}>
                            Add/Change Last.fm Username
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
