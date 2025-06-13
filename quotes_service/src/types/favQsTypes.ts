export interface Quote {
  id: number;
  body: string;
  author: string;
  tags: string[];
  favorites_count: number;
  upvotes_count: number;
  downvotes_count: number;
  author_permalink: string;
}

export interface FavQsResponse {
  quotes: Quote[];
  page: number;
  last_page: boolean;
}

export interface FavQsError {
  response?: {
    status: number;
    statusText: string;
    data?: any;
  };
  message: string;
}
