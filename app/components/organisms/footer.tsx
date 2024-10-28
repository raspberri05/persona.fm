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
                />
                <p>Copyright 2024 Persona.fm </p>

                <a href="https://netlify.com" className="underline" target="_blank" rel="noopener">This site is powered by Netlify</a>
            </aside>
            <nav>
                <h6 className="footer-title">Learn More</h6>
                <a className="link link-hover" href="/">
                    About
                </a>
                <a
                    className="link link-hover"
                    href="https://github.com/raspberri05/persona.fm"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
            </nav>
            <nav>
                <h6 className="footer-title">Community</h6>
                <a
                    className="link link-hover"
                    href="https://docs.personafm.com"
                    target="_blank"
                    rel="noreferrer"
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
