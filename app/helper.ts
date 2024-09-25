export function nav(location: string) {
    window.location.href = `/${location}`;
}

export function capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function authFail() {
    const cookies = document.cookie;
    if (!cookies.includes("username") || !cookies.includes("session")) {
        window.location.href = "/";
    }
}

export function authPass() {
    const cookies = document.cookie;
    if (cookies.includes("username") && cookies.includes("session")) {
        window.location.href = "/home";
    }
}
