export default function Login() {
  function authenticate() {
    window.location.href = `https://www.last.fm/api/auth/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&cb=${process.env.NEXT_PUBLIC_CALLBACK_URL}/home?authenticated=true`;
  }

  return (
    <div className="h-screen content-center grid justify-items-center">
      <div className="card bg-neutral text-neutral-content w-96 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Tunestats</h2>
          <p className="pb-2">A better last.fm client</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-sm btn-block btn-error"
              onClick={authenticate}
            >
              Log In with Lastfm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
