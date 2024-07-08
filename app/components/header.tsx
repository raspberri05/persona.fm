import Image from "next/image";
import { deleteCookie } from "cookies-next";

export default function Header(props: any) {
  function logout() {
    deleteCookie("session_key");
    deleteCookie("username");
    window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
  }
  return (
    <div className="navbar bg-neutral text-neutral-content hover:cursor-default">
      <div className="flex-1 sm:pl-16">
        <a className="text-xl">Tunestats</a>
      </div>
      <div className="flex-none gap-2 sm:pr-12">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src={props.image}
                width={50}
                height={50}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-error text-error-content z-[1] mt-3 w-18 p-0 shadow"
          >
            <li className="">
              <a className="block text-center px-4 py-2" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
