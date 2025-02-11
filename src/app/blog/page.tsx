import { supabase } from '@/lib/supabase';

async function getPosts() {
  const { data: posts } = await supabase
    .from('posts')
    .select('*, categories(*)')
    .eq('published', true)
    .order('published_at', { ascending: false });
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Blog
      </h1>
      <p className="mt-4 text-xl text-gray-500">
        Explore our collection of articles, insights, and guides
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <article key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={post.image_url} alt={post.title} />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <a href={`/blog/${post.slug}`} className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900 hover:text-primary-600">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.excerpt}
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <time className="text-sm text-gray-500">
                  {new Date(post.published_at).toLocaleDateString()}
                </time>
                {post.categories && (
                  <div className="ml-4 flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <span key={category.id} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {category.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}