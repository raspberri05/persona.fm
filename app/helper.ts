import { getCookie, deleteCookie } from "cookies-next";

export function nav(location: string) {
    window.location.href = `/${location}`;
}

export function capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getUsername() {
    return getCookie("username");
}
