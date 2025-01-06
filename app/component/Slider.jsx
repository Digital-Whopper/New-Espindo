"use client";

import { useState, useEffect, useCallback,useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import image1 from "@/public/images/Banner_1.jpg";
import image2 from "@/public/images/Banner_2.jpg";
import image3 from "@/public/images/Banner_3.jpg";
import image4 from "@/public/images/Banner_4.jpg";
import image5 from "@/public/images/Mobile_Banner_1.jpg";
import image6 from "@/public/images/Mobile_Banner_2.jpg";
import image7 from "@/public/images/Mobile_Banner_3.jpg";
import image8 from "@/public/images/Mobile_Banner_4.jpg";

const imageData = {
  desktop: [
    { id: 1, src: image1, alt: "Banner Image 1" },
    { id: 2, src: image2, alt: "Banner Image 2" },
    { id: 3, src: image3, alt: "Banner Image 3" },
    { id: 4, src: image4, alt: "Banner Image 4" },
  ],
  mobile: [
    { id: 5, src: image5, alt: "Mobile Banner Image 1" },
    { id: 6, src: image6, alt: "Mobile Banner Image 2" },
    { id: 7, src: image7, alt: "Mobile Banner Image 3" },
    { id: 8, src: image8, alt: "Mobile Banner Image 4" },
  ],
};

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true); // Ensure hydration
  }, []);

  useEffect(() => {
    if (isHydrated) {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024); // Update mobile state
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isHydrated]);

  const images = isMobile ? imageData.mobile : imageData.desktop;

  const startAutoSlide = useCallback(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return interval;
  }, [images.length]);

  useEffect(() => {
    if (!isHovered) {
      const interval = startAutoSlide();
      return () => clearInterval(interval);
    }
  }, [isHovered, startAutoSlide, images.length]);

  if (!isHydrated) return null; // Prevent SSR mismatch

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };


  // const productRef = useRef(null);
  // const handleScrollToProducts = () => {
  //   if (productRef.current) { // Ensure the ref is not null
  //     productRef.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
  // };
  return (
    <div className="relative w-full mx-auto">
      <div
        className="relative h-screen"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
        // onClick={handleScrollToProducts}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
         
          fill
          priority={currentIndex === 0}
          loading={currentIndex !== 0 ? "lazy" : undefined}
          className="transition-all duration-300 ease-in-out cursor-pointer "
        />
      </div>
      <button
        className="absolute left-5 w-[40px] h-[40px] top-1/2 transform rounded-full bg-[#f4839e] hover:bg-transparent -mt-[10px] -translate-y-1/2 text-white p-2 group"
        onClick={prevSlide}
      >
        <FaChevronLeft className="group-hover:text-gray-400 m-auto" />
      </button>
      <button
        className="absolute right-5 w-[40px] h-[40px] top-1/2 transform rounded-full bg-[#f4839e] hover:bg-transparent -mt-[10px] -translate-y-1/2 text-white group"
        onClick={nextSlide}
      >
        <FaChevronRight className="group-hover:text-gray-400 m-auto" />
      </button>
    </div>
  );
}
