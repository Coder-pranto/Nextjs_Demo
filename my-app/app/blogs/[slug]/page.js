import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogsData } from '../data';

const BlogsDetails = ({ params }) => {
  const { slug } = params;
  
  // Find the specific blog by the 'slug' (ID in this case)
  const blog = blogsData.find((item) => item.id === parseInt(slug));

  // If the blog is not found
//   if (!blog) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <h2 className="text-2xl font-bold text-red-500">Blog Not Found</h2>
//         <Link href="/blogs">
//           <div className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
//             Back to Blogs
//           </div>
//         </Link>
//       </div>
//     );
//   }


//* OR
// If no blog is found, trigger the notFound page
if (!blog) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-4 mt-12 max-w-4xl">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">{blog.title}</h1>
        <p className="text-gray-700 mb-6">{blog.description}</p>
        <p className="text-gray-600 mb-8 leading-relaxed">{blog.content}</p>
        <Link href="/blogs">
          <div className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300 ease-in-out">
            Back to Blogs
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogsDetails;
