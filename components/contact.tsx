"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Generate() {
    return (
        <Card>
            <CardHeader className="text-center">
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                    Report a bug, request a feature, or submit feedback
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <p>Send us an email at support@personafm.com</p>
                <p>and we will get back to you within 3 business days</p>
            </CardContent>
        </Card>
    );
}
