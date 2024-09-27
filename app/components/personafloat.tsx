export default function PersonaFloat(props: {
    generating: boolean;
    getMain: () => void;
}) {
    return (
        <div className="join flex justify-center">
            {!props.generating && (
                <button className="btn join-item" onClick={props.getMain}>
                    Generate Persona
                </button>
            )}
        </div>
    );
}
