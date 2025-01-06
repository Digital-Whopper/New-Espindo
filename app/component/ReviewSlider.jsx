"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
const people = [
  {
    img: "/images/review1.jpg",
    name: "Peter Doe",
    job: "Product Manager",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod eius recusandae officia voluptas sint deserunt dicta nihil nam omnis.",
  },
  {
    img: "/images/review1.jpg",
    name: "Susan Doe",
    job: "Front-end Dev",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod eius recusandae officia voluptas sint deserunt dicta nihil nam omnis.",
  },
  {
    img: "/images/review1.jpg",
    name: "Jack Doe",
    job: "Fullstack Dev",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod eius recusandae officia voluptas sint deserunt dicta nihil nam omnis.",
  },
  {
    img: "/images/review1.jpg",
    name: "Anna Doe",
    job: "Backend Dev",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod eius recusandae officia voluptas sint deserunt dicta nihil nam omnis.",
  },
  // You can add more people here for additional testimonials
];

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % people.length); // Move by two testimonials at once
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + people.length) % people.length); // Move by two testimonials at once
  };

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="  mx-auto pt-20 pb-20"> 
    {/* bg-[rgb(255,201,214)] */}
          <div className="relative w-full max-w-4xl mx-auto  overflow-hidden">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 50}%)`, // Move by 50% for each slide
        }}
      >
        {people.map((person, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2  h-full flex-shrink-0 p-4"
            style={{
              transition: "transform 0.5s ease-out",
            }}
          >
            <div className="text-center bg-white p-5">
              <Image width={200}
              height={200}
                src={person.img}
                alt={person.name}
                className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg mx-auto mb-6"
              />
              <h4 className="text-xl font-semibold text-gray-900">{person.name}</h4>
              <p className="text-gray-500 text-sm uppercase mb-4">{person.job}</p>
              <p className="text-gray-600 text-lg">{person.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-[#F4839D] text-white rounded-full shadow-lg hover:bg-[#F4839D] focus:outline-none"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        className="bg-[#F4839D] absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white rounded-full shadow-lg hover:bg-[#F4839D] focus:outline-none"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
    </section>

  );
}
