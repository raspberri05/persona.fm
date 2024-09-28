export default function Page() {
    return (
        <div className="text-center">
            <br />
            <p className="text-6xl">Welcome to Persona.fm!</p>
            <br />
            <p className="text-3xl">Your AI-Generated Last.fm music persona</p>
            <br />
            <p className="text-xl">
                Log In with your last.fm account to get started
            </p>
            <br />
            <p className="text-xl">
                Don&apos;t have a last.fm account? Create one{" "}
                <a
                    className="link"
                    href="https://www.last.fm/join"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>
            </p>
        </div>
    );
}
