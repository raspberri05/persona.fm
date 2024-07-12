"use client"

import { useState } from "react";

export default function Login(props: { loading: boolean }) {
  const [username, setUsername] = useState("");

  function authenticate() {
    window.location.href = `https://www.last.fm/api/auth/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&cb=${process.env.NEXT_PUBLIC_CALLBACK_URL}?authenticated=true`;
  }

  function login(e:any) {
    e.preventDefault()
    window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}/home?username=${username}#overview/recents`;
  }

  return (
    <div className="h-dvh content-center grid justify-items-center bg-neutral sm:btn-active">
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl">Tunestats</h2>
          <p className="pb-4 pt-3 text-xl">A better last.fm client</p>
          <div className="card-actions justify-end">
            <form onSubmit={(e) => login(e)}>
          <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="enter your username" className="input input-bordered w-full max-w-xs text-center input-error" />
          </form>
            {/* {!props.loading && (
              <button
                className="btn btn-sm btn-block btn-error text-lg px-4 pt-2 pb-9"
                onClick={authenticate}
              >
                Log In
              </button>
            )}
            {props.loading && (
              <span className="loading loading-spinner text-error" />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
