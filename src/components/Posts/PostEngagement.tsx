import downVoteIcon from "../../assets/down_vote.svg";
import upVoteIcon from "../../assets/up_vote.svg";
import upVoteIconFilled from "../../assets/up_vote_filled.svg";
import downVoteIconFilled from "../../assets/down_vote_filled.svg";
import commentsIcon from "../../assets/comments.svg";

interface PostEngagementProps {
  likes: number;
  comments: number;
  style?: React.CSSProperties;
}

export const PostEngagement = ({
  likes,
  comments,
  style,
}: PostEngagementProps) => {
  return (
    <div className="flex flex-row gap-2" style={style}>
      <div className="flex items-center space-x-2 bg-gray-100 p-1 px-2 rounded-full">
        <label className="swap">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />
          {/* upVote icon empty */}
          <img src={upVoteIcon} alt="Upvote" className="w-4 h-4 swap-off" />
          {/* upVote icon filled */}
          <img
            src={upVoteIconFilled}
            alt="Upvote"
            className="w-4 h-4 swap-on"
          />
        </label>

        <div className="text-sm font-medium text-gray-700">{likes}</div>
        <label className="swap">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />
          {/* downVote icon empty */}
          <img src={downVoteIcon} alt="Downvote" className="w-4 h-4 swap-off" />
          {/* downVote icon filled */}
          <img
            src={downVoteIconFilled}
            alt="Downvote"
            className="w-4 h-4 swap-on"
          />
        </label>
      </div>

      <div className="flex items-center bg-gray-100 p-1 rounded-full">
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full"
          disabled
        >
          <img src={commentsIcon} alt="Comments" className="w-4 h-4" />
        </button>
        <div className="text-sm font-medium text-gray-700 p-1">{comments}</div>
      </div>
    </div>
  );
};
