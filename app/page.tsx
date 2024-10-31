import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <div className="h-[80vh] flex items-center justify-center text-center">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Discover Your Music Persona
                </h1>
                <p className="max-w-[700px] md:text-xl">
                    Transform your Last.fm listening history into a unique
                    musical personality. Get insights about your music taste and
                    find your music soulmates.
                </p>
                <Button className="rounded-xl h-12 px-8 font-medium" size="lg">
                    Log with Last.fm
                </Button>{" "}
            </div>
        </div>
    );
}
