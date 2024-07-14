export default function Authenticate() {
    function authenticate() {
        window.open(
            `https://www.last.fm/api/auth/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&cb=${process.env.NEXT_PUBLIC_CALLBACK_URL}/login?authenticated=true`,
        );
    }
    return (
        <button className="btn btn-error" onClick={authenticate}>
            Log In with Last.fm
        </button>
    );
}
