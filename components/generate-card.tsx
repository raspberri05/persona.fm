"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function GenerateCard(props: { fcn: () => void }) {
    return (
        <Card className="text-center">
            <CardHeader>
                <CardTitle>Generate Your Music Persona</CardTitle>
                <CardDescription>
                    Discover your unique musical identity
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={props.fcn} className="w-full">
                    Generate
                </Button>
            </CardContent>
        </Card>
    );
}
