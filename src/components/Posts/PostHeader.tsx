import { formatDate } from "../../utils/functions";

interface PostHeaderProps {
  username: string;
  date: number;
}

export const PostHeader = ({ username, date }: PostHeaderProps) => {
  const formattedDate = formatDate(date);

  return (
    <div className="flex items-center space-x-1 text-sm text-gray-500">
      <div className="font-semibold">{username}</div>
      <div>&bull;</div>
      <div>{formattedDate}</div>
    </div>
  );
};
