"use client"

import { useEffect, useState } from "react";

export default function Page() {
    const [auth, setAuth] = useState(false)

    function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g
        var q = window.location.hash.substring(1);
        while (e = r.exec(q)) {
            //@ts-expect-error
          hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      }

      useEffect(() => {
        //@ts-expect-error
        const access_token = getHashParams().access_token;
        console.log(access_token)
        if (access_token) {
          setAuth(true)
        }
        else {
            window.location.href = "http://localhost:3000/"
        }
      }, []);

    
    return (
        <div className="text-center">
        <br/>
        <p className="text-2xl">View your top songs, artists, and recently played songs!</p>
        <p className="text-2xl">Please login with your preferred music account using the button above to begin</p>
        <br/>
        </div>
    );
}