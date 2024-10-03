import { useNavigate } from "react-router-dom";

interface SubRedditCardProps {
  name: string;
  subscribers: number;
  iconUrl: string;
}

export const SubRedditCard = ({
  name,
  subscribers,
  iconUrl,
}: SubRedditCardProps) => {
  const navigate = useNavigate();

  const handleClickSubReddit = () => {
    navigate(`/${name}/posts`);
  };

  return (
    <div
      className="flex items-center p-4 bg-white shadow-lg rounded-lg border border-gray-300 ease-in-out cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={handleClickSubReddit}
    >
      {/* Subreddit Icon */}
      {iconUrl !== "" ? (
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex justify-center items-center text-lg font-bold text-gray-500">
          <img src={iconUrl} alt="subreddit-icon" />
        </div>
      ) : (
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex justify-center items-center text-lg font-bold text-gray-500">
          r
        </div>
      )}

      {/* Subreddit Details */}
      <div className="flex flex-col">
        {/* Subreddit Name */}
        <p className="text-lg font-semibold text-gray-800">r/{name}</p>

        {/* Subreddit Info */}
        <p className="text-sm text-gray-500">{subscribers} members</p>
      </div>
    </div>
  );
};
