import { SearchIcon } from "lucide-react";
import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  return (
    <form className="flex items-center gap-2">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
      />
      <button type="button" className="btn btn-circle bg-sky-500 text-white">
        <SearchIcon className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
