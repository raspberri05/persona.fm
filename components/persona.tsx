import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Headphones, Zap } from "lucide-react";

export default function Persona() {
    const musicPersona = {
        vibe: "Eclectic dreamer with a dash of nostalgia",
        mainstream: {
            description:
                "Your taste is a unique blend of popular hits and hidden gems. You're not afraid to explore beyond the charts, but you also appreciate a good mainstream bop.",
            percentage: 65,
        },
        energetic: {
            description:
                "Your playlist is a rollercoaster of emotions. You've got high-energy bangers mixed with mellow tunes, creating a perfect balance for any mood.",
            percentage: 78,
        },
    };

    return (
        <Card className="w-full max-w-xl">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">
                    {musicPersona.vibe}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold flex items-center">
                            <Headphones className="mr-2" size={20} />
                            Mainstream
                        </h3>
                        <span className="text-2xl font-bold">
                            {musicPersona.mainstream.percentage}%
                        </span>
                    </div>
                    <Progress
                        value={musicPersona.mainstream.percentage}
                        className="h-2 mb-2"
                    />
                    <p className="text-sm text-muted-foreground">
                        {musicPersona.mainstream.description}
                    </p>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold flex items-center">
                            <Zap className="mr-2" size={20} />
                            Energy
                        </h3>
                        <span className="text-2xl font-bold">
                            {musicPersona.energetic.percentage}%
                        </span>
                    </div>
                    <Progress
                        value={musicPersona.energetic.percentage}
                        className="h-2 mb-2"
                    />
                    <p className="text-sm text-muted-foreground">
                        {musicPersona.energetic.description}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
