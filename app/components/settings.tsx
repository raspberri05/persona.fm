import { checkAuth, logout } from "../api/lib/lastfm/auth";
import Authenticate from "./authenticate";
import { deleteCookie } from "cookies-next";

export default function Settings() {
  function switchUser() {
    deleteCookie("username");
    window.location.href = "/";
  }
  return (
    <div className="text-center">
      <button className="btn btn-warning" onClick={() => switchUser()}>
        Switch User <br />
        (if you are logged in with last.fm, you will remain authenticated)
      </button>
      <br />
      <br />
      {!checkAuth() ? (
        <Authenticate />
      ) : (
        <button className="btn btn-error" onClick={() => logout()}>
          Log Out
        </button>
      )}
    </div>
  );
}
