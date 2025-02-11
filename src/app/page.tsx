import { supabase } from '@/lib/supabase';

async function getLatestPosts() {
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(3);
  return posts;
}

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Modern Insights for Modern Business
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Discover the latest trends, strategies, and insights to help your SaaS business thrive in today's digital landscape.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Articles
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Stay up to date with our newest insights and articles
          </p>
        </div>

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
                <div className="mt-6">
                  <time className="text-sm text-gray-500">
                    {new Date(post.published_at).toLocaleDateString()}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            View All Articles
          </a>
        </div>
      </div>
    </>
  );
}