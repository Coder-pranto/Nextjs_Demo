import Comments from '@/app/components/Comments';
import { getAllPosts } from '@/lib/getAllposts';
import { getPostComments } from '@/lib/getPostComments';
import { getSinglePost } from '@/lib/getSinglePost';
import Link from 'next/link';
import { Suspense } from 'react';

export const generateMetadata =async({params})=>{
    const {id} = params;
    const post = await getSinglePost(id);

    return {
        title: post.title,
        description: post.body,
    }
}

export default async function PostDetails({ params }) {
  const { id } = params;
  const post = await getSinglePost(id);
  const comments = await getPostComments(id);

  return (
    <div className='container mx-auto p-6'>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <h1 className='text-4xl font-bold text-blue-600 mb-4'>{post.title}</h1>
        <p className='text-gray-700 mb-6'>{post.body}</p>
        <Link href='/posts' className='text-blue-500 hover:underline'>
          Back to all posts
        </Link>
      </div>
      <hr className='my-6' />

      {/* Suspense for progressively loading the comments */}
      <Suspense fallback={<div>Loading comments...</div>}>
        <Comments comments={comments} />
      </Suspense>
    </div>
  );
}


export const generateStaticParams = async()=>{
    const posts = await getAllPosts();
    return posts.map((post)=>({
        id: post.id.toString(),
    }))
}