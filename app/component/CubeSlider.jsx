"use client"; // For Next.js 13.4

// import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "../style/cube.css";
import Image from "next/image";

                                      
const CubeSlider = () => {
//  here paste*******use effect***********************************

  // Data array for slides
  const slides = [
    {
      id: 1,
      imageUrl: "/1.jpg", 
      cost: "from Rs. 2300 ",
      title: "Jaipur Taxi",
      description:
        "Whether you&apos;re traveling solo or with family, our professional drivers, who know the city well, ensure a smooth and enjoyable experience.",
    },
    {
      id: 2,
      imageUrl: "/2.jpg", // Use the imported image directly
      cost: "from Rs. 3800",
      title: "Jaipur Taxi",
      description:
        "Planning to visit the Khatu Shyam Ji temple during your Jaipur trip? Our taxi services are the best option for a flexible and enjoyable journey.",
    },
  ];

  return (
    <section className="cube-main-section">
      <div id="tsparticles"></div>

      <section className="rotate-section">
        <div className="contentss">
          <h1>Let&apos;s Travel The World Together!</h1>
          <p>
            Our tours are designed to transport you to the heart of the world&apos;s
            most captivating destinations, creating memories that will last a
            lifetime. You can uncover the hidden gems, iconic landmarks, and
            unique cultural treasures that make each destination special.
          </p>
          <a href="http://localhost:3000/taxi"><button>Explore Tours</button></a>
        </div>

        <Swiper
          modules={[EffectCube, Autoplay]}
          effect="cube"
          grabCursor={true}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 500,
            pauseOnMouseEnter: true,
          }}
          cubeEffect={{
            shadow: false,
            slideShadows: true,
            shadowOffset: 10,
            shadowScale: 0.94,
          }}
          className="swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image
                src={slide.imageUrl}
                alt={slide.title || "Slide Image"}
                className="w-full h-full object-cover rounded"
                width={500}
                height={300}
                quality={75}
               // Optional, use fill layout if you need responsive images
              />
              <div className="cost">{slide.cost}</div>
              <div className="overlay">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default CubeSlider;







// useEffect(() => {
//   if (typeof window !== 'undefined') {
//     // Load tsParticles script
//     const particlesScript = document.createElement("script");
//     particlesScript.src =
//       "https://cdn.jsdelivr.net/npm/tsparticles@1.39.0/tsparticles.min.js";
//     particlesScript.onload = () => {
//       if (window.tsParticles) {
//         window.tsParticles.load("tsparticles", {
//           particles: {
//             number: { value: 50 },
//             shape: { type: "circle" },
//             size: { value: 3 },
//             opacity: { value: 0.5 },
//             links: {
//               enable: true,
//               distance: 150,
//               opacity: 0.4,
//               width: 1,
//             },
//             move: { enable: true, speed: 2, direction: "none" },
//           },
//         });
//       }
//     };
//     document.body.appendChild(particlesScript);

//     // Cleanup function to prevent duplicate scripts
//     return () => {
//       document.body.removeChild(particlesScript);
//     };
//   }
// }, []);