"use client";
import { useState } from 'react';
import Image from 'next/image';
const TravelFormPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to toggle popup visibility
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    countryCode: '+1',
    email: '',
    travelDate: '',
    travelCounter: 1,
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCounterChange = (increment) => {
    setFormData((prevData) => ({
      ...prevData,
      travelCounter: Math.max(1, prevData.travelCounter + increment),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form submission logic here
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleClose = () => {
    setIsPopupVisible(false); // Hide the popup when X is clicked
  };

  return (
    <div>
      {/* Button to open the popup */}
      <button
        onClick={togglePopup}
        className="bg-[#f4839e] text-white py-2 px-4 rounded"
      >
        Open Travel Form
      </button>

      {/* Background blur when popup is visible */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm z-[999999]"></div>
      )}

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Form Image */}
          <div className=" w-50">
            <Image
            width={400}
            height={400}
              src="/images/hawa-mahal-inside.jpg"
              alt="Form Image"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Modal Content */}
          <div className="w-50 bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative z-50">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-semibold text-center mb-6">Travel Booking Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-wrap ">
              {/* Name */}
              <div className="w-[30%]">
              <FormField
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
              </div>
          

              {/* Phone Number with Country Code */}
              <div className='w-[30%] mt-0'>
                <label className="block text-sm font-medium text-gray-700 w-full">Phone Number</label>
                <div className="flex space-x-2 mt-1">
                  <input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="w-20 p-2 border border-gray-300 rounded-md"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />

              {/* Travel Date */}
              <FormField
                label="Travel Date"
                name="travelDate"
                type="date"
                value={formData.travelDate}
                onChange={handleInputChange}
                required
              />

              {/* Travel Counter */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Travel Counter</label>
                <div className="flex items-center space-x-2 mt-1">
                  <button
                    type="button"
                    onClick={() => handleCounterChange(-1)}
                    className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="travelCounter"
                    value={formData.travelCounter}
                    onChange={handleInputChange}
                    className="w-20 p-2 border border-gray-300 rounded-md text-center"
                    min="1"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleCounterChange(1)}
                    className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Message */}
              <FormField
                label="Message"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                rows="4"
              />

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable FormField Component
const FormField = ({ label, name, type, value, onChange, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    )}
  </div>
);

export default TravelFormPopup;
