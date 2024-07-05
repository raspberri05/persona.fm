import Image from 'next/image';

export default function Header(props:any) {
    return (
      <div className="navbar bg-error text-error-content">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Tunestats</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src={props.image} 
                  width={50}
                  height={50}/>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-error text-error-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
}