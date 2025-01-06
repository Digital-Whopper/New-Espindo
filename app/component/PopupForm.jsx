'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Reusable Input Component
const InputField = ({ label, type, placeholder, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      {...props}
    />
  </div>
);

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // UseEffect to mark when it's safe to render on the client side
  useEffect(() => {
    setIsClient(true); // Set to true when component mounts
  }, []);

  // Prevent rendering the component on the server side
  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Popup */}
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-full sm:w-[90%] lg:w-[60%] flex flex-wrap">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setIsVisible(false)}
            >
              &times;
            </button>

            {/* Image Section */}
            <div className="mb-4 w-full lg:w-1/2">
              <Image src="/images/jantar.jpg" alt="images" width={200} height={200}
                className="rounded-md w-full h-full object-cover"
              />
            </div>

            {/* Form Section */}
            <form
              className="w-full lg:w-1/2 space-y-4 bg-gray-100 p-6 rounded-md"
              autoComplete="off"
            >
              {/* Render Form Fields */}
              {[
                { label: 'Name', type: 'text', placeholder: 'Enter your name' },
                { label: 'Email', type: 'email', placeholder: 'Enter your email' },
                {
                  label: 'Phone Number (with Country Code)',
                  type: 'tel',
                  placeholder: '+1 123 456 7890',
                },
                { label: 'Travel Date', type: 'date' },
                {
                  label: 'Traveler Count',
                  type: 'number',
                  placeholder: 'Number of travelers',
                },
              ].map((field, index) => (
                <InputField key={index} {...field} />
              ))}

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
