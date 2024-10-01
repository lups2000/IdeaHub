import { PostHeader } from "../PostHeader";

export const PostComment = () => {
  return (
    <div className="flex flex-col mb-3 border border-gray-300 p-4 rounded-md">
      <PostHeader username="username" date={new Date().getTime()} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel rerum
        autem distinctio. Nam quos laboriosam consectetur, ipsam reiciendis
        culpa fugiat quam officiis dolorum eligendi velit, ad corrupti tenetur
        temporibus.
      </p>
    </div>
  );
};
