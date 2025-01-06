'use client'; // This tells Next.js that this component should be rendered on the client side.

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Correct import for Swiper v8+ CSS
import { tsParticles } from 'tsparticles'; // Import tsParticles
import Image from 'next/image'; // For optimized image loading

const TourCards = () => {
  useEffect(() => {
    // Initialize tsParticles
    tsParticles.load('tsparticles', {
      particles: {
        number: { value: 50 },
        shape: { type: 'circle' },
        size: { value: 3 },
        opacity: { value: 0.5 },
        links: {
          enable: true,
          distance: 150,
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 2, direction: 'none' },
      },
    });
  }, []);

  return (
    <section className="cube-main-section">
      <div id="tsparticles" className="particles-container"></div>

      <section className="rotate-section">
        <div className="content">
          <h1>Let&apos;s Travel The World Together!</h1>
          <p>
            Our tours are designed to transport you to the heart of the world&apos;s
            most captivating destinations, creating memories that will last a
            lifetime. You can uncover the hidden gems, iconic landmarks, and
            unique cultural treasures that make each destination special.
          </p>
          <button>Explore Tours</button>
        </div>

        {/* Swiper Component (no need for manual Swiper initialization) */}
        <Swiper
          effect="cube"
          grabCursor={true}
          loop={true}
          speed={1000}
          cubeEffect={{
            shadow: false,
            slideShadows: true,
            shadowOffset: 10,
            shadowScale: 0.94,
          }}
          autoplay={{
            delay: 2600,
            pauseOnMouseEnter: true,
          }}
          className="swiper" // Add custom class to style if needed
        >
          {/* Swiper Slides */}
          <SwiperSlide>
            <div className="swiper-slide">
              {/* <img
                src="https://www.espindotourandtravels.com/images/one-day-img00.png"
                alt="Walking Tour in Florence"
                width={600}
                height={400}
              /> */}
              <div className="cost">from $230 per group</div>
              <div className="overlay">
                <h1>Walking Tour in Florence</h1>
                <p>
                  Discover the fascinating beauty of this historic city by
                  strolling through the rich cultural tapestry that makes Florence
                  a timeless destination.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <Image
                src="/images/nahar.jpg"
                alt="Edinburgh Guided Tour"
                width={600}
                height={400}
              />
              <div className="cost">from $380 per group</div>
              <div className="overlay">
                <h1>Edinburgh Guided Tour</h1>
                <p>
                  Explore the city&apos;s majestic castles and fascinating history by
                  joining our guided tour for an unforgettable journey through
                  Scotland&apos;s capital.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <a href="https://www.youtube.com/@ecemgokdogan/videos" target="_blank" className="logo">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Ec%C3%BCm_Logo.png"
            alt="Logo"
            width={100}
            height={50}
          />
        </a>
      </section>
    </section>
  );
};

export default TourCards;
