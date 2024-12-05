import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SelectPersona } from "@/db/schema";
import { ChevronDown } from "lucide-react";

function formatDate(timestamp: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    };
    return new Intl.DateTimeFormat("en-US", options).format(timestamp);
}

export default function PreviousCard(props: { data: SelectPersona }) {
    return (
        <Collapsible className="my-4 md:w-[95%] ml-4">
            <CollapsibleTrigger className="w-full">
                <div className="flex justify-between">
                    <p className="text-left text-xl font-bold flex">
                        {props.data.vibe}{" "}
                    </p>
                    <ChevronDown className="ml-2 mt-1" size={20} />
                </div>
                <p className="text-sm text-muted-foreground text-left pb-2">
                    {formatDate(new Date(props.data.timestamp))}
                </p>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <p className="font-semibold">
                    {props.data.mainstream_percent}% mainstream
                </p>
                <p className="text-sm text-muted-foreground pb-2">
                    {props.data.mainstream_description}
                </p>
                <p className="font-semibold">
                    {props.data.energetic_percent}% energetic
                </p>
                <p className="text-sm text-muted-foreground">
                    {props.data.energetic_description}
                </p>
            </CollapsibleContent>
        </Collapsible>
    );
}
