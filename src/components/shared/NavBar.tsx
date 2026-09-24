import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

const NavBar = () => {
  const links = (
    <>
      <li>
        <Link
          href="/"
          className="rounded-full px-4 py-2 text-xs font-bold text-gray-400
        transition
        hover:text-[#baff00]
        focus:bg-[#182600]
        focus:text-[#baff00]"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/plans"
          className="rounded-full px-4 py-2 text-xs font-medium text-gray-400
        transition
        hover:text-[#baff00]
        focus:bg-[#182600]
        focus:text-[#baff00]"
        >
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <header className="border-b border-[#1b1d21] bg-[#0b0c0e]">
      <div className="mx-auto flex h-14 max-w-350 items-center px-5 sm:px-8">
        <div className="navbar-start flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Logo of fitlog"></Image>

            <span className="text-sm font-black tracking-wide text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-1">{links}</ul>
        </nav>

        <div className="navbar-end flex flex-1 items-center justify-end gap-6">
          <Link
            href="/plans"
            className="hidden items-center gap-2 text-xs text-gray-400 transition hover:text-white sm:flex"
          >
            <span>{`Plan`}</span>
          </Link>

          <Link
            href="/plans"
            className="hidden items-center gap-2 text-xs text-gray-400 transition hover:text-white sm:flex"
          >
            <span>{`Saved`}</span>
          </Link>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <button
              tabIndex={0}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#27292e] bg-[#121419] text-gray-300 hover:bg-[#181a1f]"
              aria-label="Open menu"
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-50 mt-3 w-48 rounded-xl border border-[#24262b] bg-[#111216] p-2 shadow-2xl"
            >
              {links}

              <li>
                <Link
                  href="/plans"
                  className="text-xs text-gray-400 hover:text-white"
                >
                  Saved
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
