import Button from "@/app/components/atoms/button";

export default function LinkButton(props: {
    variant: string;
    text: string;
    href: string;
}) {
    return (
        <a href={props.href}>
            <Button variant={props.variant} text={props.text} />
        </a>
    );
}
