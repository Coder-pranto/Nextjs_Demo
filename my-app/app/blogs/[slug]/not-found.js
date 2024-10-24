import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-4">Sorry, we couldn't find the Blog page you're looking for.</p>
        <Link href="/blogs" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Back to Blogs
        </Link>
      </div>
    );
  }
  