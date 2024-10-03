import { useEffect, useState } from "react";

import {
  getCommentsPost,
  PostCommentInterface,
} from "../../../api/collections/post";
import { PostComment } from "./PostComment";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";

interface PostCommentsContainerProps {
  postId: string;
}

export const PostCommentsContainer = ({
  postId,
}: PostCommentsContainerProps) => {
  const { subreddit } = useParams<{ subreddit: string }>();

  const [comments, setComments] = useState<PostCommentInterface[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    loadComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId, subreddit]);

  const loadComments = async () => {
    setIsFetching(true);
    try {
      const response = await getCommentsPost(`r/${subreddit}`, postId);

      setComments(response);
    } catch (error) {
      console.error("Failed to load comments", error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="flex flex-col mt-2">
      <div className="text-xl font-semibold">Comments</div>
      <div className="mt-2">
        {isFetching ? (
          <div className="flex justify-center mt-4">
            <FadeLoader color="gray" />
          </div>
        ) : comments.length > 0 ? (
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
