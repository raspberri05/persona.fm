"use client";

import { useEffect, useState } from "react";
import crypto from "crypto";
import axios from "axios";
import  Header  from "./components/header";
import { setCookie, getCookie, hasCookie } from "cookies-next";

export default function Home() {
  const [ authenticated, setAuthenticated ] = useState<boolean>(false);
  const [ sessionKey, setSessionKey ] = useState<string>("");
  const [ recentTracks, setRecentTracks ] = useState<any[]>([]);
  const [ userInfo, setUserInfo ] = useState<any>({});

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
      // handle success
      console.log(response.data);
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

  useEffect(() => {
    const cookieList = getCookies();
    if (cookieList != undefined) {
      getUserInfo(cookieList[1] || '');
      setAuthenticated(true);
      setSessionKey(cookieList[0] || '');
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
          </div>
        </div>
      }
    </div>
  );
}
