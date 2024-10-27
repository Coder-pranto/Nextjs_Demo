
// 'use server';

// import { redirect } from 'next/navigation';
// import { revalidatePath } from 'next/cache';

// function isInvalidText(text) {
//   return !text || text.trim() === '';
// }

// async function saveTask(taskData) {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(taskData),
//   });

//   if (!response.ok) {
//     throw new Error('Failed to save task');
//   }

//   return response.json();
// }

// export async function shareTask(prevState, formData) {
//   const task = {
//     title: formData.get('title'),
//     body: formData.get('body'),
//     userId: 1, // For demo purposes
//   };

//   if (isInvalidText(task.title) || isInvalidText(task.body)) {
//     return {
//       message: 'Please fill in all fields.',
//     };
//   }

//   await saveTask(task);
//   revalidatePath('/tasks');
//   redirect('/tasks');
// }



// actions.js
'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

async function saveTask(taskData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error('Failed to save task');
  }

  return response.json();
}

export async function shareTask(prevState, formData) {
  const task = {
    title: formData.get('title'),
    body: formData.get('body'),
    userId: 1,
  };

  if (isInvalidText(task.title) || isInvalidText(task.body)) {
    return {
      message: 'Please fill in all fields.',
      success: false,
      task: null
    };
  }

  try {
    const newTask = await saveTask(task);
    revalidatePath('/tasks');
    
    return {
      message: 'Task added successfully!',
      success: true,
      task: newTask
    };
  } catch (error) {
    return {
      message: 'Failed to save task',
      success: false,
      task: null
    };
  }
}

// Optional: Add delete functionality
export async function deleteTask(taskId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${taskId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete task');
    }

    revalidatePath('/tasks');
    return {
      message: 'Task deleted successfully!',
      success: true
    };
  } catch (error) {
    return {
      message: 'Failed to delete task',
      success: false
    };
  }
}