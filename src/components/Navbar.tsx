import { Search } from "lucide-react";
import { Link } from "react-router-dom";

type NavLinkState = {
  id: number;
  title: string;
  path: string;
};

const navLinks: NavLinkState[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Genres",
    path: "/genres",
  },
  {
    id: 3,
    title: "Country",
    path: "/country",
  },
  {
    id: 4,
    title: "Movies",
    path: "/movies",
  },
  {
    id: 5,
    title: "Tv-Series",
    path: "/series",
  },
];

const Navbar = () => {
  return (
    <header className="shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
      <div className="container-wrapper flex gap-5 items-center h-16">
        <div>
          <h1 className="p-2 bg-accent text-xl font-black rounded">VELORA</h1>
        </div>
        <nav className="flex flex-1 gap-1 justify-start items-center">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.id}
              to={navLink.path}
              className={`text-lg py-2 px-4 font-medium rounded-lg text-muted
              active:scale-90 transition-all duration-300
              hover:text-accent-hover hover:bg-black/50`}
            >
              {navLink.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border-t border-b border-l p-2 outline-none"
          />
          <button className="border-t border-b border-r p-2 cursor-pointer">
            <Search />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
