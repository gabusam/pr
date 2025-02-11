/*
  # Blog Schema Setup

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `image_url` (text)
      - `excerpt` (text)
      - `published` (boolean)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `slug` (text, unique)
    - `post_categories`
      - Junction table for posts and categories

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

-- Posts table
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  image_url text,
  excerpt text,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Junction table for posts and categories
CREATE TABLE IF NOT EXISTS post_categories (
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_categories ENABLE ROW LEVEL SECURITY;

-- Policies for public read access
CREATE POLICY "Public can view published posts" ON posts
  FOR SELECT USING (published = true);

CREATE POLICY "Public can view categories" ON categories
  FOR SELECT TO PUBLIC USING (true);

CREATE POLICY "Public can view post categories" ON post_categories
  FOR SELECT TO PUBLIC USING (true);

-- Policies for authenticated admin write access
CREATE POLICY "Admins can manage posts" ON posts
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Admins can manage categories" ON categories
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Admins can manage post categories" ON post_categories
  FOR ALL TO authenticated USING (true);