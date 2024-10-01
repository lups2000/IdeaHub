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

export interface PostCommentInterface {
  kind: string;
  data: {
    id: string;
    author: string;
    created_utc: number;
    body_html: string;
  };
}

interface PostResponse {
  data: {
    children: Post[];
    after: string;
  };
}

interface PostCommentResponse {
  kind: string;
  data: {
    children: PostCommentInterface[];
  };
}

interface Posts {
  posts: Post[];
  after: string;
}

const apiClient = new ApiClient();

export async function getPosts(
  subreddit: string,
  after: string | null
): Promise<Posts> {
  const response = await apiClient.get<PostResponse>(
    `/${subreddit}/hot?raw_json=1`,
    {
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    },
    after ? { after } : {}
  );
  return {
    posts: response.data.children,
    after: response.data.after, // Get the after cursor from the response
  };
}

export async function getCommentsPost(
  subreddit: string,
  postId: string
): Promise<PostCommentInterface[]> {
  const response = await apiClient.get<PostCommentResponse[]>(
    `${subreddit}/comments/${postId}`,
    {
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    }
  );
  return response[1].data.children;
}
