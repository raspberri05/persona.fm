import UserNav from "@/components/user-nav";

export default function Nav() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <p>Persona.fm</p>
                <div className="ml-auto flex items-center space-x-4">
                    <UserNav />
                </div>
            </div>
        </div>
    );
}
