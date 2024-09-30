import downVoteIcon from "../../assets/down_vote.svg";
import upVoteIcon from "../../assets/up_vote.svg";
import commentsIcon from "../../assets/comments.svg";

export interface PostCardProps {
  username: string;
  date: string;
  title: string;
  imageUrl?: string;
  likes: number;
  comments: number;
}

export const PostCard = (props: PostCardProps) => {
  const { username, date, title, imageUrl, likes, comments } = props;

  return (
    <div
      className="flex flex-col p-4 bg-white shadow-md rounded-lg space-y-2 border border-gray-300"
      style={{ minWidth: 240 }}
    >
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <div className="font-semibold">{username}</div>
        <div>&bull;</div>
        <div>{date}</div>
      </div>
      <div className="text-lg font-bold text-gray-800">{title}</div>
      {imageUrl && (
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
      )}

      {/* Spacer to push content to the bottom */}
      <div className="flex-grow"></div>

      <div className="pt-4 border-t mt-4 flex flex-row gap-2">
        <div className="flex items-center bg-gray-100 p-1 rounded-full">
          <button className="flex items-center justify-center w-8 h-8 hover:bg-gray-200 rounded-full">
            <img src={upVoteIcon} alt="Upvote" className="w-4 h-4" />
          </button>
          <div className="text-sm font-medium text-gray-700">{likes}</div>
          <button className="flex items-center justify-center w-8 h-8 hover:bg-gray-200 rounded-full">
            <img src={downVoteIcon} alt="Downvote" className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center bg-gray-100 p-1 rounded-full">
          <button className="flex items-center justify-center w-8 h-8 rounded-full" disabled>
            <img src={commentsIcon} alt="Comments" className="w-4 h-4" />
          </button>
          <div className="text-sm font-medium text-gray-700 p-1">
            {comments}
          </div>
        </div>
      </div>
    </div>
  );
};
