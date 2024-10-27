"ues client";

import { getData } from "@/app/api/actions/settings/actions";
import { useEffect, useState } from "react";
import Card from "@/app/components/atoms/card";
import { User } from "@/utils/types";
import Image from "next/image";

export default function ProfileCard() {
    const [displayName, setDisplayName] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            await getData().then((a: User) => {
                console.log(a);
                setDisplayName(a?.name);
                setFullName(a?.full_name);
                setEmail(a?.email);
                setProfilePhoto(a?.picture);
            });
        };

        fetchData()
            .then((_) => {
                console.log("done");
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);
    return (
        <Card title="Your profile">
            {profilePhoto === "" && <div className="h-[100px]" />}
            {profilePhoto !== "" && (
                <Image
                    src={profilePhoto}
                    alt="google pfp"
                    width={100}
                    height={100}
                    className="rounded-full fade-in"
                    unoptimized
                    loading="eager"
                />
            )}
            <div className="fade-in">
                <p className="py-2">Display name: {displayName}</p>
                <p>Full Name: {fullName}</p>
                <p className="pt-2">Email: {email}</p>
            </div>
        </Card>
    );
}
