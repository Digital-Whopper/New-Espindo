"use client"; // for Next.js 13.4 users
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const ProductSlider = ({ items }) => {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 500 }, items: 2 },
    mobile: { breakpoint: { max: 500, min: 0 }, items: 1 },
  };

  return (
    <section className="z-0 relative">
      <Carousel responsive={responsive}>
        {items.map((item) => (
          <div
            key={item.id}
            className="m-1 sm:w-full lg:w-[99%] p-4 shadow-[0_4px_6px_rgba(0,0,0,0.4)] rounded"
          >
            <Link href={item.link} passHref>
              <div className="cursor-pointer">
                <div>
                  <Image
                    src={item.imageSrc}
                    alt={item.alt || "Product Image"}
                    className="w-full h-full object-cover rounded"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-bold mb-2">{item.title}</p>
                  <p>Tour Type: One-Day & Two-Day</p>
                  <p className="my-2 bg-gradient-to-b from-pink-200 to-transparent">
                    {item.badge}
                  </p>
                  <p className="mb-4">
                    <b>{item.price}</b> <del>{item.originalPrice}</del>
                  </p>
                </div>
              </div>
            </Link>
            <div>
              <button className="bg-[#f4839e] text-white py-2 px-4 rounded mr-2">
                <a href="tel:9828372744">Call Now</a>
              </button>
              <a
                className="bg-[#f4839e] text-white py-2 px-4 rounded"
                href="https://web.whatsapp.com/send?phone=+1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                Messsage Us
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ProductSlider;
 