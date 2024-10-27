"use client";

import LastfmCard from "@/app/components/molecules/lastfm-card";
import ProfileCard from "@/app/components/molecules/profile-card";

export default function Page() {
    return (
        <div>
            <ProfileCard />
            <LastfmCard />
            <br />
            <a
                href="https://docs.personafm.com/usage/faq"
                target="_blank"
                rel="noreferrer"
            >
                <button className="btn btn-error">Delete Account</button>
            </a>
        </div>
    );
}
