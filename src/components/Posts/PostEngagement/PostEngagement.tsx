import downVoteIcon from "../../../assets/down_vote.svg";
import upVoteIcon from "../../../assets/up_vote.svg";
import upVoteIconFilled from "../../../assets/up_vote_filled.svg";
import downVoteIconFilled from "../../../assets/down_vote_filled.svg";
import commentsIcon from "../../../assets/comments.svg";
import { useState } from "react";
import { votePost } from "../../../api/collections/post";

interface PostEngagementProps {
  numUpVotes: number;
  numComments: number;
  likes: boolean | null;
  postId: string;
  style?: React.CSSProperties;
}

export const PostEngagement = ({
  numUpVotes,
  numComments,
  likes,
  postId,
  style,
}: PostEngagementProps) => {
  const [voteStatus, setVoteStatus] = useState<number>(
    likes === true ? 1 : likes === false ? -1 : 0
  );
  const [upVotesCount, setUpVotesCount] = useState(numUpVotes);

  const handleVoteClick = async (e: React.MouseEvent, direction: number) => {
    e.stopPropagation();
    try {
      await votePost(postId, direction);

      setVoteStatus(direction);
      setUpVotesCount((prev) => prev + (direction - voteStatus)); // Adjust like count based on current and previous votes
    } catch (error) {
      console.error("Failed to vote", error);
    }
  };

  return (
    <div className="flex flex-row gap-2" style={style}>
      <div className="flex items-center space-x-2 bg-gray-100 px-2 rounded-full">
        <button onClick={(e) => handleVoteClick(e, voteStatus === 1 ? 0 : 1)}>
          {voteStatus !== 1 ? (
            <img src={upVoteIcon} alt="Upvote" className="w-4 h-4" />
          ) : (
            <img src={upVoteIconFilled} alt="Upvote" className="w-4 h-4" />
          )}
        </button>

        <div className="text-sm font-semibold text-gray-700">
          {upVotesCount}
        </div>

        <button onClick={(e) => handleVoteClick(e, voteStatus === -1 ? 0 : -1)}>
          {voteStatus !== -1 ? (
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
        <div className="text-sm font-semibold text-gray-700 p-1">
          {numComments}
        </div>
      </div>
    </div>
  );
};
