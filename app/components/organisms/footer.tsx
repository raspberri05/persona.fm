import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer p-10 fade-in">
            <aside>
                <Image
                    src="icon.svg"
                    alt="persona.fm logo"
                    width="28"
                    height="28"
                    className="p-1"
                />
                <p className="p-1">Copyright 2024 Persona.fm </p>

                <a
                    href="https://netlify.com"
                    className="underline  p-1"
                    target="_blank"
                    rel="noreferrer"
                >
                    This site is powered by Netlify
                </a>
            </aside>
            <nav>
                <h3 className="footer-title">Learn More</h3>
                <a className="link link-hover p-1" href="/">
                    About
                </a>
                <a
                    className="link link-hover p-1"
                    href="https://github.com/raspberri05/persona.fm"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
            </nav>
            <nav>
                <h3 className="footer-title">Community</h3>
                <a
                    className="link link-hover p-1"
                    href="https://docs.personafm.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    Documentation
                </a>
                <a className="link link-hover p-1" href="/contact">
                    Contact
                </a>
            </nav>
            <nav>
                <h3 className="footer-title">Legal</h3>
                <a className="link link-hover p-1" href="/terms">
                    Terms of use
                </a>
                <a className="link link-hover p-1" href="/privacy">
                    Privacy policy
                </a>
            </nav>
        </footer>
    );
}
