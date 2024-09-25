import { nav, capitalize } from "@/app/helper";

export default function JoinBtn(props: { text: string }) {
    return (
        <button className="btn join-item" onClick={() => nav(props.text)}>
            {capitalize(props.text)}
        </button>
    );
}
