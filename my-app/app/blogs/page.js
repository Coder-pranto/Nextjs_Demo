import Link from "next/link";
import { blogsData } from "./data";



export const metadata = {
  title: "Blogs",
  description: "This is blogs page.",
};


const Blogs = () => {

  return (
    <div className='container mx-auto p-4 mt-12'>
       <h1 className="text-3xl font-bold mb-6">All Blogs</h1>
      <div className='grid grid-cols-1 gap-4'>
        {blogsData.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <div  className='bg-gray-100 p-4 rounded-lg shadow-md'>
              <h2 className='text-xl font-bold text-blue-600'>{blog.title}</h2>
              <p className='text-gray-700'>{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;