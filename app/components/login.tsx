export default function Login(props: { loading: boolean }) {
  function authenticate() {
    window.location.href = `https://www.last.fm/api/auth/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&cb=${process.env.NEXT_PUBLIC_CALLBACK_URL}?authenticated=true`;
  }

  return (
    <div className="h-dvh content-center grid justify-items-center bg-neutral sm:btn-active">
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl">Tunestats</h2>
          <p className="pb-4 pt-3 text-xl">A better last.fm client</p>
          <div className="card-actions justify-end">
            {props.loading === false && (
              <button
                className="btn btn-sm btn-block btn-error text-lg px-4 pt-2 pb-9"
                onClick={authenticate}
              >
                Log In
              </button>
            )}
            {props.loading === true && (
              <span className="loading loading-spinner text-error" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
