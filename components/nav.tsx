import UserNav from "@/components/user-nav";
import MainNav from "@/components/main-nav";
import { cookies } from "next/headers";

export default async function Nav() {
    const cookieStore = await cookies();
    const authenticated = cookieStore.has("username");

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <a href="/">
                    <h1 className="text-2xl font-bold">Persona.fm</h1>
                </a>
                {authenticated && <MainNav />}

                <div className="ml-auto flex items-center space-x-4">
                    {authenticated && <UserNav />}
                </div>
            </div>
        </div>
    );
}
