import LogInButton from "@/components/log-in-button";

export default function Page() {
    return (
        <div className="h-[80vh] flex items-center justify-center text-center">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Discover Your Music Persona
                </h1>
                <p className="md:text-xl">
                    Transform your Last.fm listening history into a unique
                    musical personality.
                </p>
                <br />
                <LogInButton />
            </div>
        </div>
    );
}
