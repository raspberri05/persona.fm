import { hasCookie, getCookie, deleteCookie } from "cookies-next";

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
    deleteCookie("username");
    deleteCookie("session");
    window.location.href = "/";
}
