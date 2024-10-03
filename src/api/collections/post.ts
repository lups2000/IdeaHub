import { ApiClient } from "../apiClient";

export interface Post {
  kind: string;
  data: {
    id: string;
    title: string;
    author: string;
    ups: number;
    likes: boolean | null;
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

export interface PostComment {
  kind: string;
  data: {
    id: string;
    author: string;
    created_utc: number;
    body_html: string;
    replies:
      | {
          data: {
            children: PostComment[];
          };
        }
      | string; // replies can be an object or an empty string
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
    children: PostComment[];
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
    after: response.data.after, // Get the after cursor from the response to handle pagination
  };
}

// Recursive function to map nested replies
function mapNestedReplies(comment: PostComment): PostComment {
  // Check if the comment has replies and it's not an empty string
  if (comment.data.replies && typeof comment.data.replies === "object") {
    const replies = comment.data.replies?.data?.children || [];

    // Recursively map the replies
    comment.data.replies.data.children = replies.map((reply: PostComment) =>
      mapNestedReplies(reply)
    );
  }

  return comment;
}

export async function getCommentsPost(
  subreddit: string,
  postId: string
): Promise<PostComment[]> {
  const response = await apiClient.get<PostCommentResponse[]>(
    `${subreddit}/comments/${postId}`,
    {
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    }
  );

  const comments = response[1].data.children;
  // Ensure replies are handled recursively
  return comments.map((comment) => mapNestedReplies(comment));
}

export async function votePost(
  postId: string,
  direction: number
): Promise<void> {
  await apiClient.post(
    `api/vote`,
    {
      id: `t3_${postId}`, // 't3_' prefix means it’s a post
      dir: direction, // 1 for upvote, -1 for downvote, 0 for unvote
    },
    {
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return;
}
