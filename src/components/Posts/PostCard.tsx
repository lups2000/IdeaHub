import { PostModal } from "./PostModal";
import { useState } from "react";
import { PostHeader } from "./PostHeader";
import { PostEngagement } from "./PostEngagement";

export interface Post {
  username: string;
  date: string;
  title: string;
  description?: string;
  imageUrl?: string;
  likes: number;
  comments: number;
}

export interface PostCardProps {
  post: Post;
}

export const PostCard = (props: PostCardProps) => {
  const { username, date, title, imageUrl, likes, comments } = props.post;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleShowModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <div
        className="flex flex-col p-4 bg-white shadow-md rounded-md space-y-2 border border-gray-300 mb-3"
        style={{ minWidth: 240 }}
        onClick={handleShowModal}
      >
        {/* Post Header */}
        <PostHeader username={username} date={date} />

        {/* Post Title */}
        <div className="text-lg font-bold text-gray-800">{title}</div>

        {/* Post Image */}
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

        {/* Post Engagement */}
        <hr />
        <PostEngagement likes={likes} comments={comments} />
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        post={props.post}
      />
    </>
  );
};
