import { SearchBar } from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { SubRedditCard } from "./SubRedditCard";
import { useEffect, useState } from "react";
import {
  getMostPopularSubreddits,
  Subreddit,
} from "../../api/collections/subreddit";
import { FadeLoader } from "react-spinners";

export const SubRedditsContainer = () => {
  const navigate = useNavigate();

  const [subReddits, setSubReddits] = useState<Subreddit[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmitSearch = (subreddit: string) => {
    navigate(`/${subreddit}/posts`);
  };

  useEffect(() => {
    loadSubReddits();
  }, []);

  const loadSubReddits = async () => {
    setIsFetching(true);
    try {
      const response = await getMostPopularSubreddits(6); // Get the 6 most popular subreddits
      setSubReddits(response);
    } catch (error) {
      console.error("Failed to load subreddits", error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Search for Subreddits
        </h1>
        <SearchBar onSubmitSearch={handleSubmitSearch} />
      </div>
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Popular Subreddits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isFetching ? (
            <div className="flex justify-center items-center col-span-3">
              <FadeLoader color="gray" />
            </div>
          ) : (
            subReddits.map((subReddit) => (
              <SubRedditCard
                key={subReddit.data.id}
                name={subReddit.data.display_name}
                subscribers={subReddit.data.subscribers}
                iconUrl={subReddit.data.icon_img}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
