import { logout } from "../api/lib/lastfm/auth";

export default function Settings() {
  return (
    <div>
      <button
        className="btn btn-block btn-error"
        onClick={() => logout(process.env.NEXT_PUBLIC_CALLBACK_URL || "")}
      >
        Log Out
      </button>
    </div>
  );
}
