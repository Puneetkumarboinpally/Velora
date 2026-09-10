import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

type NavItem = {
  id: number;
  title: string;
  path: string;
};

const navLinks: NavItem[] = [
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative z-50 shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
      <div
        className="container-wrapper 
      flex gap-5 h-16
      justify-between items-center"
      >
        <div>
          <NavLink to="/" aria-label="Velora home">
            <span className="p-2 bg-accent text-xl font-black rounded">
              VELORA
            </span>
          </NavLink>
        </div>
        <nav className="hidden lg:flex flex-1 gap-1 justify-start items-center">
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.id}
              to={navLink.path}
              className={({
                isActive,
              }) => `py-2 px-4 whitespace-nowrap rounded-lg 
              active:scale-90 transition-all duration-300 
              ${
                isActive
                  ? "text-white font-medium"
                  : "text-muted hover:text-accent-hover hover:bg-panel"
              }
             `}
            >
              {navLink.title}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center">
          <input
            type="search"
            placeholder="Search movies..."
            aria-label="Search movies"
            className="w-48 border-t border-b border-l border-border
            p-2 outline-none"
          />
          <button
            aria-label="search button"
            type="button"
            className="border border-border p-2 cursor-pointer"
          >
            <Search />
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/*---- Mobile version ---- */}

        <div
          className={`lg:hidden flex flex-col items-end
        absolute top-16 left-0 bg-background py-4
        transition-transform duration-500 w-full
        ${isOpen ? "translate-x-0" : "translate-x-[100%]"}
        `}
        >
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.id}
              to={navLink.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
            py-2 px-4 
            whitespace-nowrap rounded-lg
            active:scale-90 transition-all duration-300 ${
              isActive
                ? "text-white font-medium"
                : "text-muted hover:text-accent-hover hover:bg-panel"
            }`}
            >
              {navLink.title}
            </NavLink>
          ))}
          <form className="flex items-center py-2 px-4">
            <input
              type="search"
              placeholder="Search movies..."
              aria-label="Search movies"
              className="w-48 border-t border-b border-l border-border
              p-2 outline-none"
            />
            <button
              type="submit"
              className="border border-border active:scale-95 p-2 cursor-pointer"
            >
              <Search />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
