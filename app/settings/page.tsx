"use client";

import { addUsername } from "./actions";

export default function Page() {
    return (
        <form>
            <label htmlFor="email">Last.fm Username</label>
            <input id="email" name="username" type="text" required />
            <button formAction={addUsername}>Add Last.fm Username</button>
        </form>
    );
}
