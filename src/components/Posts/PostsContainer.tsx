import Masonry from "react-masonry-css";
import { PostCard } from "./PostCard";
import "../../style/post.css";
import { useEffect, useState } from "react";
import { getPosts, Post } from "../../api/collections/post";
import { FadeLoader } from "react-spinners";

export const PostsContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    setIsFetching(true);
    getPosts("/reactjs")
      .then((response) => {
        console.log(response);
        setPosts(response);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <div className="flex flex-col items-center p-10">
      {!isFetching ? (
        <>
          <Masonry
            breakpointCols={breakpointColumns}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </Masonry>
          <button className="w-40 h-10 mt-4 rounded-sm bg-white border border-gray-300 font-semibold transition duration-300 ease-in-out hover:scale-110">
            Load More
          </button>{" "}
        </>
      ) : <FadeLoader color="gray"/>}
    </div>
  );
};
