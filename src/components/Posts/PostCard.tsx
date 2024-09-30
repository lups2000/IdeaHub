import downVoteIcon from "../../assets/down_vote.svg";
import upVoteIcon from "../../assets/up_vote.svg";
import upVoteIconFilled from "../../assets/up_vote_filled.svg";
import downVoteIconFilled from "../../assets/down_vote_filled.svg";
import commentsIcon from "../../assets/comments.svg";
import { PostModal } from "./PostModal";
import { useState } from "react";

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
  const [isModalOpen, setModalOpen] = useState(false);

  const handleShowModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <div
        className="flex flex-col p-4 bg-white shadow-md rounded-lg space-y-2 border border-gray-300 mb-3"
        style={{ minWidth: 240 }}
        onClick={handleShowModal}
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
              <img
                src={downVoteIcon}
                alt="Downvote"
                className="w-4 h-4 swap-off"
              />
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
            <div className="text-sm font-medium text-gray-700 p-1">
              {comments}
            </div>
          </div>
        </div>
      </div>
      <PostModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
