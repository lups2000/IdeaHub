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
  const { author, created_utc, title, ups, num_comments, selftext_html } =
    post.data;
  const imageUrl = post.data.preview?.images?.[0]?.source?.url || "";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-box bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
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
          likes={ups}
          comments={num_comments}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        <hr />

        {/* Comments Section */}
        <PostCommentsContainer postId={post.data.id}/>
      </div>
    </div>
  );
};
