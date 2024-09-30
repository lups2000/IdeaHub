import Masonry from "react-masonry-css";
import { Post, PostCard } from "./PostCard";
import "../../style/post.css";

export const PostsContainer = () => {
  const posts: Post[] = [
    {
      username: "u/Direct_Message_8558",
      date: "11h ago",
      title:
        "Who has most successfully milked what should have been 15 minutes of fame?",
      description: "I'm thinking of people like the 'Cash",
      imageUrl: undefined,
      likes: 5300,
      comments: 4200,
    },
    {
      username: "u/VioEnvy",
      date: "19h ago",
      title: "I woke up to a black glove in my foyer.",
      description: "I woke up to a black glove in my foyer.",
      imageUrl: undefined,
      likes: 3200,
      comments: 2400,
    },
    {
      username: "u/PopsicleDragon",
      date: "19h ago",
      title: "Do you agree with him? (Former PlayStation Boss Message)",
      imageUrl: "/path-to-image/ghost_of_tsushima.jpg",
      likes: 19800,
      comments: 3300,
    },
    {
      username: "u/Mint_Perspective",
      date: "16h ago",
      title:
        "A blimp crashes into buildings in a Sao Paulo suburb on Wednesday, Sept. 25th",
      imageUrl: undefined,
      likes: 40500,
      comments: 3300,
    },
    {
      username: "u/emily-is-happy",
      date: "3h ago",
      title: "They don't care about US (Bezos meme)",
      imageUrl: "/path-to-image/bezos_meme.jpg",
      likes: 8400,
      comments: 497,
    },
    {
      username: "u/emily-is-happy",
      date: "3h ago",
      title: "They don't care about US (Bezos meme)",
      imageUrl: "/path-to-image/bezos_meme.jpg",
      likes: 8400,
      comments: 497,
    },
    {
      username: "u/Mint_Perspective",
      date: "16h ago",
      title:
        "A blimp crashes into buildings in a Sao Paulo suburb on Wednesday, Sept. 25th",
      imageUrl: undefined,
      likes: 40500,
      comments: 3300,
    },
    {
      username: "u/Mint_Perspective",
      date: "16h ago",
      title:
        "A blimp crashes into buildings in a Sao Paulo suburb on Wednesday, Sept. 25th",
      imageUrl: undefined,
      likes: 40500,
      comments: 3300,
    },
    {
      username: "u/Mint_Perspective",
      date: "16h ago",
      title:
        "A blimp crashes into buildings in a Sao Paulo suburb on Wednesday, Sept. 25th",
      imageUrl: undefined,
      likes: 40500,
      comments: 3300,
    },
  ];

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div
      className="flex flex-col items-center p-10"
      style={{ backgroundColor: "rgb(249, 249, 245)" }}
    >
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
      </button>
    </div>
  );
};
