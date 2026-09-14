import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "../data/Products";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" border-b border-border">
      <div className="container-wrapper relative flex items-center justify-between gap-5 h-16 w-full">
        {/* Logo */}
        <Link to="/" aria-label="Velora Home">
          <span className="text-xl py-1 px-2 bg-accent rounded font-black">
            VELORA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 gap-3 items-center">
          {NavLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `
            px-4 py-2 active:scale-95
            transition-all duration-300 text-muted rounded-lg
            ${
              isActive
                ? "text-white font-medium"
                : "hover:bg-background hover:text-accent-hover"
            }
          `}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Search */}
        <div className="hidden lg:flex">
          <SearchBar />
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`
        absolute top-full left-0 w-full
        lg:hidden z-50
        bg-background border-b border-border
        transition-all duration-500 
        ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }
      `}
        >
          <div className="flex flex-col gap-4 p-4">
            <nav className="flex flex-col gap-5">
              {NavLinks.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                 active:scale-95
                transition-all duration-300
                text-muted rounded-lg text-lg
                ${
                  isActive
                    ? "text-white font-medium"
                    : "hover:bg-background hover:text-accent-hover"
                }
              `}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>

            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
