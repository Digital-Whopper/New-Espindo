"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
const people = [
  {
    img: "/user.webp",
    job: "Bloger",
    name: "Lucky",
  
    text: "I recently booked a trip through Espindo, and it was one of the most seamless experiences ever! The platform provided detailed itineraries, clear pricing, and even helpful packing tips. The local guide they connected me with was knowledgeable and made the trek unforgettable. Highly recommend Espindo for adventure lovers!",
  },
  {img: "/user.webp",
    job: "Developer",
   
    name: "Harsh",
    text: "Espindo made planning my tropical escape stress-free! From resort options to local activities like snorkeling and island tours, everything was at my fingertips. Their customer support was super helpful when I had questions about travel insurance. Only reason for 4 stars is I wish they offered more last-minute deals, but I will definitely book again!",
  },
  {
    img: "/user.webp",
    job: "Doctor",
    name: "Boby",

    text: "Traveling with kids can be tricky, but Espindo made it easy. I found family-friendly packages tailored to our needs, and the booking process was straightforward. The website also included helpful reviews from other families, which reassured us that we were making the right choice. Our vacation was smooth and full of fun!",
  },
  {
    img: "/user.webp",
    job: "Teacher",
    name: "Sunny",
 
    text: "As a solo traveler, I prioritize safety and authenticity, and Espindo delivered on both counts. Their curated experiences allowed me to explore off-the-beaten-path destinations while staying within my budget. I also loved their blog section—it was packed with tips that helped me make the most of my trip. Highly recommend Espindo for solo adventurers!",
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
