export interface Blog {
  _id: string;
  title: string;
  content: string;
  featuredImage: {
    public_id: string;
    url: string;
  };
  metaTitle: string;
  metaDescription: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v?: number;
}

export interface BlogApiResponse {
  status: string;
  data: {
    blogPost: Blog;
  };
}