"use client";

import { useEffect, useState } from "react";
import crypto from "crypto";
import axios from "axios";
import  Header  from "./components/header";
import { setCookie, getCookie, hasCookie } from "cookies-next";
import Image from 'next/image';

export default function Home() {
  const [ authenticated, setAuthenticated ] = useState<boolean>(false);
  const [ sessionKey, setSessionKey ] = useState<string>("");
  const [ recentTracks, setRecentTracks ] = useState<any[]>([]);
  const [ userInfo, setUserInfo ] = useState<any>({});
  const [ activeTab, setActiveTab ] = useState<string>("recent-tracks");

  function setCookies(session_key: string, username: string) {
    setCookie('session_key', session_key)
    setCookie('username', username)
  }

  function getCookies() {
    let cookieList = []
    if (!hasCookie('session_key') || !hasCookie('username')) {
      return undefined
    }
    else {
      cookieList.push(getCookie('session_key'))
      cookieList.push(getCookie('username'))
      return cookieList
    }

  }

  function authenticate() {
    window.location.href=`https://www.last.fm/api/auth/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&cb=${process.env.NEXT_PUBLIC_CALLBACK_URL}?authenticated=true`
  }

  function getSession(token: string, signature: string) {
    axios.get(`https://ws.audioscrobbler.com/2.0/`, {
      params: {
        method: 'auth.getSession',
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        token: token,
        api_sig: signature,
        format: 'json'
      }
    })
    .then(response => {
      setCookies(response.data.session.key, response.data.session.name);
      window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
    })
    .catch(error => {
      // handle error
      window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
      console.log(error)
    });
  }

  function getUserInfo(user: string) {
    axios.get(`https://ws.audioscrobbler.com/2.0/`, {
      params: {
        method: 'user.getInfo',
        user: user,
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        format: 'json'
      }
    })
    .then(response => {
      setUserInfo(response.data.user);
    })
    .catch(error => {
      console.log(error);
    })
  }

  function getRecentTracks(username: string) {
    axios.get(`https://ws.audioscrobbler.com/2.0/`, {
      params: {
        method: 'user.getRecentTracks',
        user: username,
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        format: 'json'
      }
    })
    .then(response => {
      console.log(response.data)
      setRecentTracks(response.data.recenttracks.track);
    })
    .catch(error => {
      console.log(error);
    })  
  }

  function switchTab(tab: string) {
    setActiveTab(tab);
  }

  function convertUTCDateToLocal(dateStr: string) {
    // Parse the date string to a Date object as UTC
    const [day, month, year, time] = dateStr.split(/[\s,]+/);
    const date = new Date(`${month} ${day}, ${year} ${time} UTC`);
  
    // Convert to the user's local time zone and format
    const localDateStr = date.toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  
    // Extract date and time parts
    const [datePart, timePart] = localDateStr.split(', ');
  
    // Return JSX with <br> between date and time
    return <>{datePart}<br />{timePart}</>;
  }

  function nowPlaying() {
    const now = "Now"
    const playing = "Playing"
    return <>{now}<br/> {playing}</>
  }

  useEffect(() => {
    const cookieList = getCookies();
    if (cookieList != undefined) {
      getUserInfo(cookieList[1] || '');
      setAuthenticated(true);
      setSessionKey(cookieList[0] || '');
      getRecentTracks(cookieList[1] || '');
      return
    }

    const queryParams = new URLSearchParams(window.location.search);
    const isAuthenticated = queryParams.get('authenticated') === 'true';
    const token = queryParams.get('token');
    const signature = `api_key${process.env.NEXT_PUBLIC_API_KEY}methodauth.getSessiontoken${token}${process.env.NEXT_PUBLIC_SHARED_SECRET}`;
    const hashedSignature = crypto.createHash('md5').update(signature).digest('hex');
    if (isAuthenticated && token) {
      setAuthenticated(true);
      console.log("here")
      getSession(token, hashedSignature);
    }
  }, []);

  return (
    <div>
      { !authenticated && 
        <div className="h-screen content-center grid justify-items-center">
          <div className="card bg-neutral text-neutral-content w-96 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Tunestats</h2>
              <p className="pb-2">A better last.fm client</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-block btn-error" onClick={authenticate}>Log In with Lastfm</button>
              </div>
            </div>
          </div>
        </div>
      }
      { authenticated &&
        <div>
          <Header image={userInfo?.image?.[0]?.['#text'] ?? "vercel.svg"}/>
          <div className="container mx-auto">
            <br />
            <br />
            <div role="tablist" className="tabs tabs-boxed">
              <a role="tab" className={"tab " + (activeTab === "recent-tracks" ? "tab-active" : "")} onClick={() => switchTab("recent-tracks")}>Recent Tracks</a>
              <a role="tab" className={"tab " + (activeTab === "artists" ? "tab-active" : "")} onClick={() => switchTab("artists")}>Artists</a>
              <a role="tab" className={"tab " + (activeTab === "albums" ? "tab-active" : "")} onClick={() => switchTab("albums")}>Albums</a>
            </div>
            <br />
            {activeTab === "recent-tracks" && 
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    {recentTracks.map((track, index) => (
                      <tr key={index} className="hover:text-primary">
                        <td style={{ width: "0" }} className="pr-1 pb-1">
                          <div className="avatar">
                            <div className="w-12 rounded-md">
                            <Image
                          alt="album cover"
                            src={track.image[2]['#text']} 
                            width={50}
                            height={50}
                          />
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="font-bold text-md">{track.name}</p>
                          <p>{track.artist['#text']} - {track.album['#text']}</p>
                        </td>
                        <td className="text-end">
                          <p className={track?.['@attr']?.['nowplaying'] ? "text-error" : ""}>{!track?.['@attr']?.['nowplaying'] ? convertUTCDateToLocal(track?.date?.['#text']) : nowPlaying()}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          </div>
        </div>
      }
    </div>
  );
}
