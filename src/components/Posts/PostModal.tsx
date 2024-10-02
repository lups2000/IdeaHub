import closeIcon from "../../assets/close.svg";
import { PostHeader } from "./PostHeader";
import { PostEngagement } from "./PostEngagement/PostEngagement";
import { Post } from "../../api/collections/post";
import { PostCommentsContainer } from "./PostEngagement/PostCommentsContainer";
import { decodeHtmlEntities } from "../../utils/functions";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
}

export const PostModal = ({ isOpen, onClose, post }: PostModalProps) => {
  const {
    author,
    created_utc,
    title,
    ups,
    num_comments,
    selftext_html,
    likes,
    id,
  } = post.data;
  const imageUrl = post.data.preview?.images?.[0]?.source?.url || "";

  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackgroundClick}
    >
      <div
        className="modal-box bg-white p-6 rounded-lg shadow-lg w-auto max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Username and Date */}
        <div className="flex flex-row justify-between">
          <PostHeader username={author} date={created_utc} />
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
        <div
          className="text-gray-700 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{
            __html: decodeHtmlEntities(selftext_html),
          }}
        />

        {/* Image if available */}
        {imageUrl && (
          <figure>
            <img
              src={imageUrl}
              alt="post-image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
        )}

        {/* Post Engagement */}
        <PostEngagement
          numUpVotes={ups}
          numComments={num_comments}
          likes={likes}
          postId={id}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        <hr />

        {/* Comments Section */}
        <PostCommentsContainer postId={post.data.id} />
      </div>
    </div>
  );
};
