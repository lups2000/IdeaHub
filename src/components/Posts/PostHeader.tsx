interface PostHeaderProps {
  username: string;
  date: string;
}

export const PostHeader = ({ username, date }: PostHeaderProps) => {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-500">
      <div className="font-semibold">{username}</div>
      <div>&bull;</div>
      <div>{date}</div>
    </div>
  );
};
