'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import SafariSection from "../component/SafariSection";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <>
      <Image src="/images/contactbanner.png" width={1920} height={350} layout="responsive" alt="contact" />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Feel Free To Contact us
        </h2>
        <div className="lg:flex justify-between gap-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <iframe
              className="top-0 left-0 w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.05321101606!2d75.62574595312086!3d26.88511514457059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1732884549124!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#f4839d] text-white text-lg font-semibold rounded-md hover:bg-[#f4839d] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex justify-around flex-wrap">
          <div className="text-center w-full lg:w-[33%]">
            <h3 className="font-semibold text-lg">Our Location</h3>
            <p className="text-gray-600">
              Plot No. 17 Siddharth Nagar, Near Jawahar Circle,<br /> Jagatpura, Jaipur Rajasthan Pin 302017
            </p>
          </div>
          <div className="text-center w-full lg:w-[33%]">
            <h3 className="font-semibold text-lg">Call Us</h3>
            <p className="text-gray-600">+91-9828372744</p>
          </div>
          <div className="text-center w-full lg:w-[33%]">
            <h3 className="font-semibold text-lg">Email Us</h3>
            <p className="text-gray-600">espindotourandtravels@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
