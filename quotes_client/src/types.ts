export interface Quote {
  id: number;
  body: string;
  author: string;
  tags: string[];
  favorites_count: number;
  upvotes_count: number;
  downvotes_count: number;
  author_permalink: string;
  url: string;
}

