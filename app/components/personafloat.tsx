export default function PersonaFloat(props: {
    generating: boolean;
    getMain: () => void;
}) {
    return (
        <div className="flex justify-center">
            {!props.generating && (
                <button className="btn btn-primary" onClick={props.getMain}>
                    Generate Persona
                </button>
            )}
        </div>
    );
}
