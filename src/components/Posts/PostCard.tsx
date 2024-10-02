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

  const [isModalOpen, setModalOpen] = useState(false);

  const handleShowModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

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
          numUpVotes={ups}
          numComments={num_comments}
          likes={likes}
          postId={id}
        />
      </div>
      {
        <PostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          post={props.post}
        />
      }
    </>
  );
};
