import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <form>
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Search"
          className="border-t border-b border-l 
          border-border p-2 outline-none 
          w-64"
        />
        <button
          aria-label="Search button"
          type="button"
          className="border border-border p-2 active:scale-95"
        >
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
