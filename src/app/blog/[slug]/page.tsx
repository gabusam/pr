import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';

async function getPost(slug: string) {
  const { data: post } = await supabase
    .from('posts')
    .select('*, categories(*)')
    .eq('slug', slug)
    .eq('published', true)
    .single();
  return post;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative aspect-video mb-8 rounded-xl overflow-hidden">
        <img
          src={post.image_url}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          {post.title}
        </h1>
        {post.categories && (
          <div className="mt-4 flex justify-center gap-2">
            {post.categories.map((category) => (
              <span key={category.id} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                {category.name}
              </span>
            ))}
          </div>
        )}
        <time className="mt-4 block text-gray-500">
          {new Date(post.published_at).toLocaleDateString()}
        </time>
      </header>

      <div className="prose prose-lg mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}