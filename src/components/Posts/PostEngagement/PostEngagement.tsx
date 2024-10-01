import downVoteIcon from "../../../assets/down_vote.svg";
import upVoteIcon from "../../../assets/up_vote.svg";
import upVoteIconFilled from "../../../assets/up_vote_filled.svg";
import downVoteIconFilled from "../../../assets/down_vote_filled.svg";
import commentsIcon from "../../../assets/comments.svg";
import { useState } from "react";

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
  const [isUpVoted, setIsUpVoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);

  const handleVoteClick = (e: React.MouseEvent, type: string) => {
    e.stopPropagation();
    if (type === "up") {
      setIsUpVoted(!isUpVoted);
      if (isDownVoted) {
        setIsDownVoted(false);
      }
    } else {
      setIsDownVoted(!isDownVoted);
      if (isUpVoted) {
        setIsUpVoted(false);
      }
    }
  };
  return (
    <div className="flex flex-row gap-2" style={style}>
      <div className="flex items-center space-x-2 bg-gray-100 px-2 rounded-full">
        <button onClick={(e) => handleVoteClick(e, "up")}>
          {!isUpVoted ? (
            <img src={upVoteIcon} alt="Upvote" className="w-4 h-4" />
          ) : (
            <img src={upVoteIconFilled} alt="Upvote" className="w-4 h-4" />
          )}
        </button>

        <div className="text-sm font-semibold text-gray-700">{likes}</div>

        <button onClick={(e) => handleVoteClick(e, "down")}>
          {!isDownVoted ? (
            <img src={downVoteIcon} alt="Downvote" className="w-4 h-4" />
          ) : (
            <img src={downVoteIconFilled} alt="Downvote" className="w-4 h-4" />
          )}
        </button>
      </div>

      <div className="flex items-center bg-gray-100 p-1 rounded-full">
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full"
          disabled
        >
          <img src={commentsIcon} alt="Comments" className="w-4 h-4" />
        </button>
        <div className="text-sm font-semibold text-gray-700 p-1">{comments}</div>
      </div>
    </div>
  );
};
