import { PostComment } from "./PostComment";

export const PostCommentsContainer = () => {
  return (
    <div className="flex flex-col mt-2">
      <div className="text-xl font-semibold">Comments</div>
      <div className="mt-2">
        <PostComment />
        <PostComment />
        <PostComment />
        <PostComment />
      </div>
    </div>
  );
};
