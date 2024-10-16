export default function Button(props: {
    variant: string;
    text: string;
    onClick?: () => void;
    formAction?: any;
}) {
    return (
        <button
            className={`btn btn-${props.variant} hover:opacity-80`}
            onClick={props.onClick}
            formAction={props.formAction}
        >
            {props.text}
        </button>
    );
}
