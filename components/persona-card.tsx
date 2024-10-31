"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Headphones, Zap } from "lucide-react";

export default function PersonaCard(props: { data: any }) {
    return (
        <Card className="w-full max-w-xl">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">
                    {props.data.vibe}
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
                            {props.data.mainstream.percent}%
                        </span>
                    </div>
                    <Progress
                        value={props.data.mainstream.percent}
                        className="h-2 mb-2"
                    />
                    <p className="text-sm text-muted-foreground">
                        {props.data.mainstream.description}
                    </p>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold flex items-center">
                            <Zap className="mr-2" size={20} />
                            Energy
                        </h3>
                        <span className="text-2xl font-bold">
                            {props.data.energetic.percent}%
                        </span>
                    </div>
                    <Progress
                        value={props.data.energetic.percent}
                        className="h-2 mb-2"
                    />
                    <p className="text-sm text-muted-foreground">
                        {props.data.energetic.description}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
