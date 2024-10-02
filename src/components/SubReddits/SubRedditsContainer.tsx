import { SearchBar } from "./SearchBar";
import { useNavigate } from "react-router-dom";

export const SubRedditsContainer = () => {
  const navigate = useNavigate();

  const handleSubmitSearch = (subreddit: string) => {
    navigate(`/${subreddit}/posts`);
  };

  return (
    <div className="flex flex-col items-center mt-60">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Search for Subreddits
        </h1>
        <SearchBar onSubmitSearch={handleSubmitSearch} />
      </div>
    </div>
  );
};
