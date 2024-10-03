import { decodeHtmlEntities } from "../../../utils/functions";
import { PostHeader } from "../PostHeader";
import { PostComment } from "../../../api/collections/post";

interface PostCommentProps {
  username: string;
  date: number;
  comment: string;
  replies?: PostComment[]; // Accept replies as a prop
}

export const PostCommentCard = ({
  username,
  date,
  comment,
  replies,
}: PostCommentProps) => {
  return (
    <div className="flex flex-col mb-3 border-l-2 border-gray-300 p-4">
      {/* Comment header */}
      <PostHeader username={username} date={date} />

      {/* Comment body */}
      <div
        className="text-gray-700 leading-relaxed mb-6"
        dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(comment) }}
      />

      {/* Render replies (if any) */}
      {replies && replies.length > 0 && (
        <div className="ml-3 pl-4 border-gray-300">
          {replies.map((reply) => (
            <PostCommentCard
              key={reply.data.id}
              username={reply.data.author}
              date={reply.data.created_utc}
              comment={reply.data.body_html}
              replies={
                typeof reply.data.replies !== "string" // if it's a string , it's an empty string and we don't have any replies
                  ? reply.data.replies?.data.children
                  : undefined
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};
