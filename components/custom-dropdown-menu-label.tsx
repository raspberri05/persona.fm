import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { getCookie } from "cookies-next";

export default function CustomDropdownMenuLabel() {
    return (
        <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                    {getCookie("username")}
                </p>
            </div>
        </DropdownMenuLabel>
    );
}
