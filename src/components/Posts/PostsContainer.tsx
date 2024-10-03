import Masonry from "react-masonry-css";
import { PostCard } from "./PostCard";
import "../../style/post.css";
import { useEffect, useState } from "react";
import { getPosts, Post } from "../../api/collections/post";
import { FadeLoader } from "react-spinners";
import { useParams } from "react-router-dom";

export const PostsContainer = () => {
  const { subreddit } = useParams<{ subreddit: string }>(); // Get the subreddit from the URL

  const [posts, setPosts] = useState<Post[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [after, setAfter] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const breakpointColumns = {
    // breakpoints for the masonry layout
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  // Load the initial posts
  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subreddit]);

  const loadPosts = async () => {
    setIsFetching(true);
    try {
      const response = await getPosts(`r/${subreddit}`, after);

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
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        r/{subreddit}
      </h1>
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
