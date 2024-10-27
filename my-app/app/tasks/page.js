
'use client';

import { useFormState } from 'react-dom';
import { useState, useEffect } from 'react';
import { shareTask, deleteTask } from '@/lib/actions';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [state, formAction] = useFormState(shareTask, {
    message: null,
    success: false,
    task: null
  });

  // Fetch existing tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError('Failed to load tasks. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Add new task to the list when submitted
  useEffect(() => {
    if (state.success && state.task) {
      setTasks(prevTasks => [state.task, ...prevTasks]);
      // Reset form
      document.querySelector('form').reset();
    }
  }, [state]);

  // Handle task deletion
  const handleDelete = async (taskId) => {
    try {
      const result = await deleteTask(taskId);
      if (result.success) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Create New Task</h1>
          <form action={formAction} className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-2 font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="body" className="block mb-2 font-medium">
                Description
              </label>
              <textarea
                id="body"
                name="body"
                rows="4"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {state.message && (
              <div 
                className={`p-3 rounded ${
                  state.success 
                    ? 'bg-green-100 text-green-700 border border-green-400' 
                    : 'bg-red-100 text-red-700 border border-red-400'
                }`}
              >
                {state.message}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 
                       transition-colors duration-200 focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:ring-offset-2"
            >
              Share Task
            </button>
          </form>
        </div>

        {/* Tasks List Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Tasks</h2>
          
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4 border border-red-400">
              {error}
            </div>
          )}

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="border rounded p-4 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : tasks.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No tasks yet. Create your first task!
            </div>
          ) : (
            <div className="space-y-4">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="border rounded p-4 hover:shadow-md transition-shadow relative group"
                >
                  <h3 className="font-bold text-lg">{task.title}</h3>
                  <p className="text-gray-600 mt-2">{task.body}</p>
                  
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100
                             text-red-500 hover:text-red-700 transition-opacity duration-200"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}