"use client";

import LastfmCard from "@/app/components/molecules/lastfm-card";
import ProfileCard from "@/app/components/molecules/profile-card";

export default function Page() {
    return (
        <div>
            <ProfileCard />
            <LastfmCard />
        </div>
    );
}
