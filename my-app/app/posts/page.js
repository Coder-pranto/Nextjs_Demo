import { getAllPosts } from '@/lib/getAllposts';
import Link from 'next/link';

export default async function Posts() {

  const posts = await getAllPosts();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition duration-300">
            <h2 className="text-xl font-bold text-blue-600 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.body.slice(0, 100)}...</p>
            <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
