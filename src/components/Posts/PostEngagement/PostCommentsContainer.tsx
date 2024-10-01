import { useEffect, useState } from "react";

import {
  getCommentsPost,
  PostCommentInterface,
} from "../../../api/collections/post";
import { PostComment } from "./PostComment";

interface PostCommentsContainerProps {
  postId: string;
}

export const PostCommentsContainer = ({
  postId,
}: PostCommentsContainerProps) => {
  const [comments, setComments] = useState<PostCommentInterface[]>([]);

  useEffect(() => {
    getCommentsPost("/reactjs", postId)
      .then((response) => setComments(response))
      .catch((error) => console.log(error));
  }, [postId]);

  return (
    <div className="flex flex-col mt-2">
      <div className="text-xl font-semibold">Comments</div>
      <div className="mt-2">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <PostComment
              key={comment.data.id}
              username={comment.data.author}
              date={comment.data.created_utc}
              comment={comment.data.body_html}
            />
          ))
        ) : (
          <p className="text-gray-500">There are no comments yet!</p>
        )}
      </div>
    </div>
  );
};
