import { useState } from "react";
import searchIcon from "../../assets/search.svg";

interface SearchBarProps {
  onSubmitSearch: (search: string) => void;
}

export const SearchBar = ({ onSubmitSearch }: SearchBarProps) => {
  const [search, setSearch] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmitSearch(search);
    }
  };

  const handleSubmitSearch = () => {
    onSubmitSearch(search);
  };

  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type="text"
        className="grow"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <img
        src={searchIcon}
        alt="search-icon"
        className="w-4 h-4 cursor-pointer"
        onClick={handleSubmitSearch}
      />
    </label>
  );
};
