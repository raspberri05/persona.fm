import Button from "@/app/components/atoms/button";

export default function PersonaFloat(props: {
    generating: boolean;
    getMain: () => void;
}) {
    return (
        <div className="flex justify-center">
            {!props.generating && (
                <Button
                    variant="primary"
                    text="Generate Persona"
                    onClick={props.getMain}
                />
            )}
        </div>
    );
}
