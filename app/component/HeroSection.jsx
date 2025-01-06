import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const HeroSection = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 500 }, items: 1 },
    mobile: { breakpoint: { max: 500, min: 0 }, items: 1 },
  };

  // Image data
  const items = [
    { id: 1, srcDesktop: "/Banner_1.jpg", srcMobile: "/Mobile_Banner_1.jpg", alt: "Banner Image 1" },
    { id: 2, srcDesktop: "/Banner_2.jpg", srcMobile: "/Mobile_Banner_2.jpg", alt: "Banner Image 2" },
    { id: 3, srcDesktop: "/Banner_3.jpg", srcMobile: "/Mobile_Banner_3.jpg", alt: "Banner Image 3" },
    { id: 4, srcDesktop: "/Banner_4.jpg", srcMobile: "/Mobile_Banner_4.jpg", alt: "Banner Image 4" },
  ];

  return (
    <div>
      <section className="z-0 relative">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          pauseOnHover={false} 
          showDots={true}
          arrows={true}
        >
          {items.map((item) => (
            <div key={item.id} className="banners">
              {/* Show desktop image for larger screens and mobile image for smaller screens */}
              <div className="hidden sm:hidden md:block lg:block">
                <Image
                  src={item.srcDesktop}
                  alt={item.alt}
                  width={1920}
                  height={500}
                  className="banner_img"
                />
              </div>
              <div className="block sm:block md:hidden lg:hidden">
                <Image
                  src={item.srcMobile}
                  alt={item.alt}
                  width={1440}
                  height={2160}
                  className="banner_img"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default HeroSection;
