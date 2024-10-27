import React from 'react';

export default function Comments({ comments }) {
  if (!comments || comments.length === 0) {
    return <p className="text-gray-500">No comments yet. Be the first to comment!</p>;
  }

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">Comments ({comments.length})</h2>
      
      <ul className="space-y-6">
        {comments.map((comment) => (
          <li key={comment.id} className="p-5 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-blue-500">{comment.name}</h3>
              <p className="text-sm text-gray-500">Email: {comment.email}</p>
            </div>
            <p className="text-gray-700 leading-relaxed">{comment.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
