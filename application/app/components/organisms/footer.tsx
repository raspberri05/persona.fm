import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer p-10">
            <aside>
                <Image
                    src="icon.svg"
                    alt="persona.fm logo"
                    width="40"
                    height="40"
                />
                <p>
                    Persona.fm
                    <br />
                    Copyright 2024 Naya Singhania
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Learn More</h6>
                <a className="link link-hover" href="/">
                    About
                </a>
            </nav>
            <nav>
                <h6 className="footer-title">Community</h6>
                <a
                    className="link link-hover"
                    href="https://docs.personafm.com"
                >
                    Documentation
                </a>
                <a className="link link-hover" href="/contact">
                    Contact
                </a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover" href="/terms">
                    Terms of use
                </a>
                <a className="link link-hover" href="/privacy">
                    Privacy policy
                </a>
            </nav>
        </footer>
    );
}
