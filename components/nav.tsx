import UserNav from "@/components/user-nav";
import MainNav from "@/components/main-nav";

export default function Nav() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <a href="/">
                    <h1 className="text-2xl font-bold">Persona.fm</h1>
                </a>
                <MainNav />

                <div className="ml-auto flex items-center space-x-4">
                    <UserNav />
                </div>
            </div>
        </div>
    );
}
