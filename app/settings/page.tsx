import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { DeleteAccountButton } from "@/components/delete-button";

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Settings</h1>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Delete Account</CardTitle>
                        <CardDescription>
                            Permanently delete your account and all associated
                            data.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Once you delete your account, there is no going
                            back. Please be certain.
                        </p>
                        <DeleteAccountButton />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
