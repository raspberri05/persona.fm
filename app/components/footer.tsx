import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-neutral text-neutral-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="https://github.com/raspberri05/tunestats" target="_blank" rel="noopener noreferrer">Github</a>
        <a className="link link-hover" href="feedback" target="_blank" rel="noopener noreferrer">Feedback</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/s_icon.png" width={30} height={30} alt="spotify logo" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright {new Date().getFullYear()} Tunestats</p>
      </aside>
    </footer>
  );
}
