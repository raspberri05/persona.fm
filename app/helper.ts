import { hasCookie } from "cookies-next";

export function nav(location: string) {
    if (typeof window !== "undefined") {
        window.location.href = `/${location}`;
    }
}

export function capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function authFail() {
    if (typeof document !== "undefined") {
        const cookies = document.cookie;
        if (!cookies.includes("username") || !cookies.includes("session")) {
            window.location.href = "/";
        }
    }
}

export function authPass() {
    if (typeof document !== "undefined") {
        const cookies = document.cookie;
        if (cookies.includes("username") && cookies.includes("session")) {
            window.location.href = "/home";
        }
    }
}

export function checkAuth() {
    if (!hasCookie("username") || !hasCookie("session")) {
        return false;
    }
    return true;
}

export function getUsername() {
    const cookies = document.cookie;
    const username = cookies
        .split(";")
        .find((cookie) => cookie.includes("username"));
    return username?.split("=")[1];
}

export function deleteCookies() {
    document.cookie =
        "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
        "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
}
