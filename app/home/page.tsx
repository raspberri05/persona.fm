import Generate from "@/components/generate";
import Persona from "@/components/persona";

export default function Page() {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 px-4">
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Welcome back, raspberri05!
            </h2>

            <div className="flex flex-col items-center space-y-6 ">
                <Generate />
                <Persona />
            </div>
        </div>
    );
}
