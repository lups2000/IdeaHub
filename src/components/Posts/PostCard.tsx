import downVoteIcon from "../../assets/down_vote.svg";
import upVoteIcon from "../../assets/up_vote.svg";
import commentsIcon from "../../assets/comments.svg";

export const PostCard = () => {
  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-lg space-y-2 max-w-lg w-full">
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <div className="font-semibold">username</div>
        <div>&bull;</div>
        <div>date</div>
      </div>
      <div className="text-lg font-bold text-gray-800">Title of the Post</div>
      <div className="w-full bg-gray-200 flex items-center justify-center rounded-lg">
        <span className="text-gray-500">Image Placeholder</span>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-full">
          <button className="flex items-center justify-center w-8 h-8 hover:bg-gray-200 rounded-full">
            <img src={upVoteIcon} alt="Upvote" className="w-4 h-4" />
          </button>
          <div className="text-sm font-medium text-gray-700">130</div>
          <button className="flex items-center justify-center w-8 h-8 hover:bg-gray-200 rounded-full">
            <img src={downVoteIcon} alt="Downvote" className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-full">
          <button className="flex items-center justify-center w-8 h-8 hover:bg-gray-200 rounded-full">
            <img src={commentsIcon} alt="Upvote" className="w-4 h-4" />
          </button>
          <div className="text-sm font-medium text-gray-700 p-1">130</div>
        </div>
      </div>
    </div>
  );
};
