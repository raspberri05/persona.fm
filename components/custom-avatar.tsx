import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CustomAvatarProps {
    imageSrc: string;
}

export default function CustomAvatar({ imageSrc }: CustomAvatarProps) {
    return (
        <Avatar className="h-8 w-8">
            <AvatarImage src={imageSrc} alt="@shadcn" />
            <AvatarFallback />
        </Avatar>
    );
}
