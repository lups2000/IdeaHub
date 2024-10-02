import { useState } from "react";
import { SearchBar } from "./SearchBar";

export const SubRedditsContainer = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex flex-col items-center mt-60">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Search for Subreddits
        </h1>
        <SearchBar search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};
