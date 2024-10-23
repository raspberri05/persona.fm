export default function Page() {
    return (
        <div className="text-center">
            <br />
            <p className="text-6xl">Welcome to Persona.fm!</p>
            <br />
            <p className="text-3xl">Your AI-Generated Last.fm music persona</p>
            <br />
            <p className="text-xl">
                <a href="/login" className="underline">
                    Log In
                </a>{" "}
                to get started
            </p>
        </div>
    );
}
