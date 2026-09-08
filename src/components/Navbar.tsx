import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between">
        <div>Velora</div>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/genres"}>Genres</Link>
          <Link to={"/country"}>Country</Link>
          <Link to={"/movies"}>Movies</Link>
          <Link to={"/series"}>Tv-Series</Link>
        </nav>
        <div>
          <input type="text" placeholder="Search" />
          <button>
            <Search />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
