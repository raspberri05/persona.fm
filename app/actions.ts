"use server"

import { cookies } from 'next/headers'

export async function setCookie(session_key: string, username: string) {
    console.log("setting cookie")
    cookies().set({
        name: 'session_key',
        value: session_key,
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: true,
        maxAge: 60 * 24 * 60 * 60,
      })

      cookies().set({
        name: 'username',
        value: username,
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: true,
        maxAge: 60 * 24 * 60 * 60,
      })
}

export async function getCookie() {
    const cookieStore = cookies()
    const session_key = cookieStore.get("session_key")
    const username = cookieStore.get("username")
    let cookieList = []
    cookieList.push(session_key)
    cookieList.push(username)

    return cookieList
}

