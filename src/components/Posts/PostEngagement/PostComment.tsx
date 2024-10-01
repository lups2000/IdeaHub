import { decodeHtmlEntities } from "../../../utils/functions";
import { PostHeader } from "../PostHeader";

interface PostCommentProps {
  username: string;
  date: number;
  comment: string;
}

export const PostComment = ({ username, date, comment }: PostCommentProps) => {
  return (
    <div className="flex flex-col mb-3 border border-gray-300 p-4 rounded-md">
      <PostHeader username={username} date={date} />
      <div
        className="text-gray-700 leading-relaxed mb-6"
        dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(comment) }}
      />
    </div>
  );
};
