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
      imageUrl: "/texi-11.png", 
      cost: "from Rs. 2000-2500 ",
      title: "Jaipur Taxi",
      description:
        "Whether you&apos;re traveling solo or with family, our professional drivers, who know the city well, ensure a smooth and enjoyable experience.",
    },
    {
      id: 2,
      imageUrl: "/texi-12.png", // Use the imported image directly
      cost: "from Rs. 2700",
      title: "Khatu Shyamji Taxi From Jaipur",
      description:
        "Planning to visit the Khatu Shyam Ji temple during your Jaipur trip? Our taxi services are the best option for a flexible and enjoyable journey.",
    },
    {
      id: 3,
      imageUrl: "/texi-3.png", // Use the imported image directly
      cost: "from Rs. 2500-5000",
      title: "Jaipur to Delhi | Ajmer | Jodhpur | Udaipur etc. Taxi Available",
      description:
        "Planning to visit Jaipur to Delhi | Ajmer | Jodhpur | Udaipur etc. during your Jaipur trip? Our taxi services are the best option for a flexible and enjoyable journey.",
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
          <a href="http://localhost:3000/taxi"><button className="bg-[]">Explore Tours</button></a>
        </div>

        <Swiper
          modules={[EffectCube, Autoplay]}
          effect="cube"
          grabCursor={true}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 200,
            pauseOnMouseEnter: false,
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
              <div className="flex ">
                <div className="absolute top-0 left-1.5 bg-[url('/offer.png')] w-[75px] h-[75px] bg-cover bg-center"></div>
                <p className="cost">{slide.cost}</p></div>
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