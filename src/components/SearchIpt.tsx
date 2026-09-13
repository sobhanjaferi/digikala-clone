// =============== MUI Icons ===============
import SearchIcon from "@mui/icons-material/Search";

// =============== Imports Section ===============
import { ReactElement } from "react";

function SearchIpt(): ReactElement {
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="جستجو در       "
        className="p-2.5 rounded-full border border-gray-300 text-right w-full lg:bg-gray-200 lg:rounded lg:border-none"
      />

      <div className="absolute right-3 top-3 text-gray-400">
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchIpt;
