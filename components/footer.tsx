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
                                width="25"
                                height="25"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="100"
                                    height="100"
                                    rx="20"
                                    fill="url(#paint0_linear_34_29)"
                                />
                                <path
                                    d="M54.5 80.9688V85H24.6406V80.9688H25.8594C28.2656 80.9688 30.1719 80.5312 31.5781 79.6562C33.0156 78.75 33.7344 76.8906 33.7344 74.0781V27.0156C33.7344 24.3281 33 22.5781 31.5312 21.7656C30.0625 20.9219 28.1719 20.5 25.8594 20.5H24.6406V16.4688H51.5938C55.625 16.4688 59.125 16.9219 62.0938 17.8281C65.0625 18.7344 67.5156 20.0625 69.4531 21.8125C73.2969 25.25 75.2188 30.1562 75.2188 36.5312C75.2188 39.375 74.7656 42.1094 73.8594 44.7344C72.9844 47.3281 71.5312 49.6406 69.5 51.6719C67.4688 53.6719 64.8125 55.2812 61.5312 56.5C58.25 57.7188 54.2344 58.3281 49.4844 58.3281H43.4375V74.5469C43.4375 77.2031 44.1562 78.9375 45.5938 79.75C47.0312 80.5625 48.9375 80.9688 51.3125 80.9688H54.5ZM49.9531 21.0625H43.4375V53.7812H48.5469C54.3906 53.7812 58.5625 52.4844 61.0625 49.8906C63.5938 47.2656 64.8594 42.9375 64.8594 36.9062C64.8594 34.2188 64.5938 31.8906 64.0625 29.9219C63.5312 27.9219 62.6719 26.2656 61.4844 24.9531C59.1094 22.3594 55.2656 21.0625 49.9531 21.0625Z"
                                    fill="#D3D0CB"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_34_29"
                                        x1="1.9297e-06"
                                        y1="100"
                                        x2="100"
                                        y2="1.9297e-06"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#3B82F6" />
                                        <stop
                                            offset="0.5"
                                            stopColor="#8B5CF6"
                                        />
                                        <stop offset="1" stopColor="#EC4899" />
                                    </linearGradient>
                                </defs>
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
                                <Link href="/">About</Link>
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
                                <Link href="/privacy">Privacy</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://github.com/personafm/persona.fm"
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
                                    href="https://www.producthunt.com/posts/persona-fm"
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
