import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                        <AvatarFallback>NS</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            raspberri05
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            naya.singhania@gmail.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <a href="/settings">
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </a>
                <a href="/">
                    <DropdownMenuItem>Log Out</DropdownMenuItem>
                </a>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
