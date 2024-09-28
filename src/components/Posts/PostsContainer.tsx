import { PostCard, PostCardProps } from "./PostCard";

export const PostsContainer = () => {
  const posts: PostCardProps[] = [
    {
      username: "u/Direct_Message_8558",
      date: "11h ago",
      title:
        "Who has most successfully milked what should have been 15 minutes of fame?",
      imageUrl: undefined,
      likes: 5300,
      comments: 4200,
    },
    {
      username: "u/VioEnvy",
      date: "19h ago",
      title: "I woke up to a black glove in my foyer.",
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
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-10 bg-gray-100 min-h-screen">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};
