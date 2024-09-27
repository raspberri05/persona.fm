import { hasCookie, getCookie } from "cookies-next";

export function nav(location: string) {
    window.location.href = `/${location}`;
}

export function capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function authFail() {
    if (!hasCookie("username") || !hasCookie("session")) {
        window.location.href = "/";
    }
}

export function authPass() {
    if (hasCookie("username") && hasCookie("session")) {
        window.location.href = "/home";
    }
}

export function checkAuth() {
    if (!hasCookie("username") || !hasCookie("session")) {
        return false;
    }
    return true;
}

export function getUsername() {
    return getCookie("username");
}

export function deleteCookies() {
    document.cookie =
        "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
        "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
}
