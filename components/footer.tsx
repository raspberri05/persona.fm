import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="flex items-center">
                            <span className="sr-only">Persona.fm</span>
                            <svg
                                className="h-8 w-auto"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </Link>
                        <p className="text-sm">&copy; 2024 Persona.fm</p>
                        <p className="text-xs flex items-center">
                            This site is powered by Netlify
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms">Terms</Link>
                            </li>
                            <li>
                                <Link href="/privacy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* GitHub and Product Hunt Column */}
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://github.com/persona-fm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <Github className="h-4 w-4 mr-2" />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.producthunt.com/@persona-fm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <svg
                                        className="h-4 w-4 mr-2"
                                        viewBox="0 0 40 40"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 30C14.48 30 10 25.52 10 20C10 14.48 14.48 10 20 10C25.52 10 30 14.48 30 20C30 25.52 25.52 30 20 30ZM20 15C17.24 15 15 17.24 15 20C15 22.76 17.24 25 20 25C22.76 25 25 22.76 25 20C25 17.24 22.76 15 20 15Z" />
                                    </svg>
                                    Product Hunt
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
