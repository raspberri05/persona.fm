import Link from "next/link";

export default function MainNav() {
    return (
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link
                href="/home"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Home
            </Link>
        </nav>
    );
}
