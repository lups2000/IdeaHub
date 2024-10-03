import { useEffect, useState } from "react";

import {
  getCommentsPost,
  PostCommentInterface,
} from "../../../api/collections/post";
import { PostComment } from "./PostComment";
import { useParams } from "react-router-dom";

interface PostCommentsContainerProps {
  postId: string;
}

export const PostCommentsContainer = ({
  postId,
}: PostCommentsContainerProps) => {
  const { subreddit } = useParams<{ subreddit: string }>();

  const [comments, setComments] = useState<PostCommentInterface[]>([]);

  useEffect(() => {
    getCommentsPost(`r/${subreddit}`, postId)
      .then((response) => {
        console.log(response);
        setComments(response);
      })
      .catch((error) => console.log(error));
  }, [subreddit, postId]);

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
              replies={
                typeof comment.data.replies !== "string" // if it's a string , it's an empty string and we don't have any replies
                  ? comment.data.replies?.data.children
                  : undefined
              }
            />
          ))
        ) : (
          <p className="text-gray-500">There are no comments yet!</p>
        )}
      </div>
    </div>
  );
};
