import { Post } from "./PostCard";
import closeIcon from "../../assets/close.svg";
import { PostHeader } from "./PostHeader";
import { PostEngagement } from "./PostEngagement";
import { PostComments } from "./PostComments";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
}

export const PostModal = ({ isOpen, onClose, post }: PostModalProps) => {
  const { username, date, title, imageUrl, likes, comments, description } =
    post;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-box bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        {/* Header with Username and Date */}
        <div className="flex flex-row justify-between">
          <PostHeader username={username} date={date} />
          <img
            src={closeIcon}
            alt="close"
            className="w-5 h-5 cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl text-gray-800 mb-4">{title}</h3>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

        {/* Image if available */}
        {imageUrl && (
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
        )}

        {/* Post Engagement */}
        <PostEngagement
          likes={likes}
          comments={comments}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        <hr />

        {/* Comments Section */}
        <PostComments />
      </div>
    </div>
  );
};
