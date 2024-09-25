import { nav } from "@/app/helper";

export default function PrevButton() {
    return (
        <button className="btn join-item" onClick={() => nav("previous")}>
            See previous personas
        </button>
    );
}
