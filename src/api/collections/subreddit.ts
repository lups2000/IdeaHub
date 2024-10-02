import { ApiClient } from "../apiClient";

export interface Subreddit {
  kind: string;
  data: {
    id: string;
    display_name: string;
    subscribers: number;
    icon_img: string;
  };
}

export interface SubredditResponse {
  data: {
    children: Subreddit[];
  };
}

const apiClient = new ApiClient();

export const getMostPopularSubreddits = async (
  limit: number
): Promise<Subreddit[]> => {
  const response = await apiClient.get<SubredditResponse>(
    `subreddits/popular?limit=${limit}`,
    {
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    }
  );
  return response.data.children;
};
