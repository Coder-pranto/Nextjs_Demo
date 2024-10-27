"use client"; // This makes the component a client-side component

import React from 'react';

const Button = () => {
  const handleClick = () => {
    alert('Button clicked!');
    console.log("Button is clicked!")
  };

  return (
    <button 
      onClick={handleClick} 
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      Click Me
    </button>
  );
};

export default Button;
