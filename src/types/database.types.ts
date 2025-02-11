export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  image_url: string | null;
  excerpt: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  categories?: Category[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}