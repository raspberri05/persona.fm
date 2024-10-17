"ues client";

import { useEffect, useState } from "react";
import { addUsername } from "@/app/api/actions/settings/actions";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Button from "@/app/components/atoms/button";
import Card from "@/app/components/atoms/card";

export default function ProfileCard() {
    const [username, setUsername] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    useEffect(() => {
        const temp = getCookie("provider_username");
        setUsername(temp || "");
    }, []);
    return (
        <div className="text-center">
            <Card title="">
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
                    <Button
                        variant="ghost"
                        formAction={addUsername}
                        text="Add/Change Last.fm Username"
                    />
                </form>
            </Card>
        </div>
    );
}
