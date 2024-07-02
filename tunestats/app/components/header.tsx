export default function Header(props:any) {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Tracks</a>
              </li>
              <li>
                <a>Artists</a>
              </li>
              <li>
                <a>Recently Played</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Tunestats</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a onClick={() => props.click("tracks")}>Tracks</a>
            </li>
            <li>
              <a onClick={() => props.click("artists")}>Artists</a>
            </li>
            <li>
              <a onClick={() => props.click("recents")}>Recently Played</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Log Out</a>
        </div>
      </div>
      <br />
    </div>
  );
}
