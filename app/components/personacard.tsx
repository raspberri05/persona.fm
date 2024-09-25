export default function PersonaCard() {
    function submit() {
        window.location.href = "/api/auth";
    }
    return (
        <div className="card bg-neutral text-neutral-content w-96 max-w-full mx-4">
            <div className="card-body items-center">
                <h2 className="card-title">Persona.fm</h2>
                <p>Your last.fm persona</p>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-primary"
                        onClick={() => submit()}
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
}
