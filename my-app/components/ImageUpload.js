'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
/* 
 You can use the “fill” prop instead of setting a “width” and “height” whenever you have an image where you don’t know the dimensions in advance. 

 Using the fill attribute in Next.js Image component lets the image scale proportionally within its parent container without setting a fixed width and height, making it responsive.

 */

export default function ImageUpload() {
  const [imageSrc, setImageSrc] = useState(null); // must use null here
  const fileInputRef = useRef(null);

  // Handle button click to open file input dialog
  const handlePickImageClick = () => {
    fileInputRef.current.click();
  };

  // Handle image selection and show preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto'>
      <button
        type='button'
        onClick={handlePickImageClick}
        className='bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600'
      >
        Pick an Image
      </button>
      <input
        type='file'
        ref={fileInputRef}
        onChange={handleImageChange}
        accept='image/*'
        className='hidden'
      />

      {/* Display selected image preview */}
      {imageSrc && (
        <div className='relative w-full h-64 mt-4'>
          <Image
            src={imageSrc}
            alt='Uploaded Image Preview'
            fill
            className='object-cover rounded-lg'
            placeholder='blur'
            blurDataURL={imageSrc} // optional placeholder effect
          />
        </div>
      )}
    </div>
  );
}
