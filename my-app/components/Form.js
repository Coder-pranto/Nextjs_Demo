"use client"

import { useRef, useState } from 'react';
import { useFormStatus } from "react-dom";

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [imagePreview, setImagePreview] = useState(null);
  const { pending } = useFormStatus();
  const fileInputRef = useRef(null);

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData); 
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-lg max-w-md mx-auto space-y-4">
      <div>
        <label className="block text-lg font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
          required
        />
      </div>

      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={handleImageUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Select Image
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
          accept="image/*"
        />
        {imagePreview && (
          <div className="w-16 h-16 overflow-hidden rounded-md">
            <img src={imagePreview} alt="Selected Preview" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className={`w-full py-2 rounded-md ${pending ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white`}
      >
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default Form;
