import { ApiClient } from "../apiClient";

export interface Post {
  kind: string;
  data: {
    id: string;
    title: string;
    author: string;
    ups: number;
    downs: number;
    num_comments: number;
    selftext_html: string;
    created_utc: number;
    preview?: {
      images: {
        source: {
          url: string;
          width: number;
          height: number;
        };
      }[];
    };
  };
}

interface PostResponse {
  data: {
    children: Post[];
  };
}

const apiClient = new ApiClient();

export async function getPosts(subreddit: string): Promise<Post[]> {
  const response = await apiClient.get<PostResponse>(`${subreddit}/hot?raw_json=1`, {
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
  });
  return response.data.children;
}