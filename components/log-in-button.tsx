import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";

export default async function LogInButton() {
    const cookieStore = await cookies();
    const authenticated = cookieStore.has("username");

    return (
        <a href={authenticated ? "/home" : "/api/auth/request"}>
            <Button className="rounded-xl h-12 px-8 font-semibold dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black bg-white text-black hover:bg-black hover:text-white">
                {authenticated ? "Go to home" : "Log In with Last.fm"}
            </Button>
        </a>
    );
}
