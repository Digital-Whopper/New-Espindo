// "use client";

// import { useEffect } from "react";
// import Swiper from "swiper";
// import "swiper/swiper-bundle.min.css";

// const TestCube = () => {
//   useEffect(() => {
//     // Initialize Swiper with Cube Effect
//     new Swiper(".swiper", {
//       effect: "cube",
//       grabCursor: true,
//       loop: true,
//       speed: 1000,
//       cubeEffect: {
//         shadow: false,
//         slideShadows: true,
//         shadowOffset: 10,
//         shadowScale: 0.94,
//       },
//       autoplay: {
//         delay: 2600,
//         pauseOnMouseEnter: true,
//       },
//     });

//     // Initialize tsParticles (optional)
//     if (typeof window !== "undefined") {
//       import("tsparticles").then((tsParticles) => {
//         tsParticles.load("tsparticles", {
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
//       });
//     }
//   }, []);

//   return (
//     <section className="cube-main-section">
//       <div id="tsparticles"></div>

//       <section className="rotate-section">
//         <div className="contentss">
//           <h1>Let's Travel The World Together!</h1>
//           <p>
//             Our tours are designed to transport you to the heart of the world's
//             most captivating destinations, creating memories that will last a
//             lifetime. You can uncover the hidden gems, iconic landmarks, and
//             unique cultural treasures that make each destination special.
//           </p>
//           <button>Explore Tours</button>
//         </div>

//         <div className="swiper">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide">
//               <img src="https://www.espindotourandtravels.com/images/one-day-img00.png" />
//               <div className="cost">from $230 per group</div>
//               <div className="overlay">
//                 <h1>Walking Tour in Florence</h1>
//                 <p>
//                   Discover the fascinating beauty of this historic city by
//                   strolling through the rich cultural tapestry that makes Florence
//                   a timeless destination.
//                 </p>
//               </div>
//             </div>
//             <div className="swiper-slide">
//               <img src="https://www.espindotourandtravels.com/images/wildlife-img.jpeg" />
//               <div className="cost">from $380 per group</div>
//               <div className="overlay">
//                 <h1>Edinburgh Guided Tour</h1>
//                 <p>
//                   Explore the city's majestic castles and fascinating history by
//                   joining our guided tour for an unforgettable journey through
//                   Scotland's capital.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <a
//           href="https://www.youtube.com/@ecemgokdogan/videos"
//           target="_blank"
//           className="logo"
//         >
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/a/af/Ec%C3%BCm_Logo.png"
//             alt="Logo"
//           />
//         </a>
//       </section>
//     </section>
//   );
// };

// export default TestCube;
