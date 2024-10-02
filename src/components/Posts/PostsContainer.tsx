import Masonry from "react-masonry-css";
import { PostCard } from "./PostCard";
import "../../style/post.css";
import { useEffect, useState } from "react";
import { getPosts, Post } from "../../api/collections/post";
import { FadeLoader } from "react-spinners";

export const PostsContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [after, setAfter] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  // Load the initial posts
  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to load posts (initial or additional)
  const loadPosts = async () => {
    setIsFetching(true);
    try {
      const response = await getPosts("r/reactjs", after);

      setPosts([...posts, ...response.posts]);
      setAfter(response.after);
      setHasMore(!!response.after); // !! operator converts the value to a boolean
    } catch (error) {
      console.error("Failed to load posts", error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((post) => (
          <PostCard key={post.data.id} post={post} />
        ))}
      </Masonry>
      {isFetching ? (
        <div className="flex justify-center mt-4">
          <FadeLoader color="gray" />
        </div>
      ) : (
        hasMore &&
        posts.length > 0 && (
          <button
            onClick={loadPosts}
            className="w-40 h-10 mt-4 rounded-sm bg-white border border-gray-300 font-semibold transition duration-300 ease-in-out hover:scale-110"
          >
            Load More
          </button>
        )
      )}
    </div>
  );
};
