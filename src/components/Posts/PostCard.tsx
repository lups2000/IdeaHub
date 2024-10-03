import { PostModal } from "./PostModal";
import { useState } from "react";
import { PostHeader } from "./PostHeader";
import { PostEngagement } from "./PostEngagement/PostEngagement";
import { Post } from "../../api/collections/post";

export interface PostCardProps {
  post: Post;
}

export const PostCard = (props: PostCardProps) => {
  const { author, created_utc, title, ups, num_comments, likes, id } =
    props.post.data;

  const imageUrl = props.post.data.preview?.images?.[0]?.source?.url || "";

  // Local state for likes and upvotes
  const [upVotesCount, setUpVotesCount] = useState(ups);
  const [voteStatus, setVoteStatus] = useState(
    likes === true ? 1 : likes === false ? -1 : 0
  );

  const [isModalOpen, setModalOpen] = useState(false);

  const handleShowModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // Function to handle vote changes
  const handleVoteChange = (newVoteStatus: number) => {
    setVoteStatus(newVoteStatus);
    setUpVotesCount((prev) => prev + (newVoteStatus - voteStatus));
  };

  return (
    <>
      <div
        className="flex flex-col p-4 bg-white shadow-md rounded-md space-y-2 border border-gray-400 mb-3 cursor-pointer"
        style={{ minWidth: 240 }}
        onClick={handleShowModal}
      >
        {/* Post Header */}
        <PostHeader username={author} date={created_utc} />

        {/* Post Title */}
        <div className="text-lg font-bold text-gray-800">{title}</div>

        {/* Post Image */}
        {imageUrl && (
          <figure>
            <img
              src={imageUrl}
              alt="post-image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
        )}

        {/* Spacer to push content to the bottom */}
        <div className="flex-grow"></div>

        {/* Post Engagement */}
        <hr />
        <PostEngagement
          numUpVotes={upVotesCount}
          numComments={num_comments}
          likes={voteStatus === 1 ? true : voteStatus === -1 ? false : null}
          postId={id}
          onVoteChange={handleVoteChange}
        />
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        post={{
          ...props.post,
          data: {
            ...props.post.data,
            ups: upVotesCount,
            likes: voteStatus === 1 ? true : voteStatus === -1 ? false : null,
          },
        }} // Pass updated post data
        onVoteChange={handleVoteChange}
        voteStatus={voteStatus}
      />
    </>
  );
};
