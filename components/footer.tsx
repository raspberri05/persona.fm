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
                                width="24"
                                height="24"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="100"
                                    height="100"
                                    rx="20"
                                    fill="#276FBF"
                                />
                                <path
                                    d="M53.9375 77.4727V81H27.8105V77.4727H28.877C30.9824 77.4727 32.6504 77.0898 33.8809 76.3242C35.1387 75.5312 35.7676 73.9043 35.7676 71.4434V30.2637C35.7676 27.9121 35.125 26.3809 33.8398 25.6699C32.5547 24.9316 30.9004 24.5625 28.877 24.5625H27.8105V21.0352H51.3945C54.9219 21.0352 57.9844 21.4316 60.582 22.2246C63.1797 23.0176 65.3262 24.1797 67.0215 25.7109C70.3848 28.7187 72.0664 33.0117 72.0664 38.5898C72.0664 41.0781 71.6699 43.4707 70.877 45.7676C70.1113 48.0371 68.8398 50.0605 67.0625 51.8379C65.2852 53.5879 62.9609 54.9961 60.0898 56.0625C57.2188 57.1289 53.7051 57.6621 49.5488 57.6621H44.2578V71.8535C44.2578 74.1777 44.8867 75.6953 46.1445 76.4062C47.4023 77.1172 49.0703 77.4727 51.1484 77.4727H53.9375ZM49.959 25.0547H44.2578V53.6836H48.7285C53.8418 53.6836 57.4922 52.5488 59.6797 50.2793C61.8945 47.9824 63.002 44.1953 63.002 38.918C63.002 36.5664 62.7695 34.5293 62.3047 32.8066C61.8398 31.0566 61.0879 29.6074 60.0488 28.459C57.9707 26.1895 54.6074 25.0547 49.959 25.0547Z"
                                    fill="#D3D0CB"
                                />
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
