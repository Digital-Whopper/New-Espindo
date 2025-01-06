// "use client"; // for nextjs 13.4 user
// import Link from "next/link";
// import React from "react";


// const TrendingSlider = () => {
//   const filteredItems = [
//     {
//       id: 1,
//       img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "camera",
//       price: 200,
//     },
//     {
//       id: 2,
//       img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Phone",
//       price: 100,
//     },
//     {
//       id: 3,
//       img: "https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Laptop",
//       price: 500,
//     },
//     {
//       id: 4,
//       img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Headephone",
//       price: 40,
//     },
//     {
//       id: 5,
//       img: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Keyboard",
//       price: 140,
//     }, 
//     {
//       id: 6,
//       img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Gaming Mouse",
//       price: 140,
//     },
//        {
//       id: 6,
//       img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Gaming Mouse",
//       price: 140,
//     },
//   ];

//   const slideLeft = () => {
//     let slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft - 235;
//   };

//   const slideRight = () => {
//     let slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft + 235;
//   };

//   return (
//     <div className="trending h-screen">
//       <div className="container mx-auto px-5 flex flex-col justify-center">
//         <div className="title-btns flex justify-between">
//           <h3 className="text-3xl font-semibold mb-16"></h3>
//           <div className="btns flex gap-1">
//             <button
//               title="scroll left"
//               onClick={slideLeft}
//               className="bg-gray-700 text-white p-4 text-xl w-16 h-16 rounded-full hover:bg-black transition"
//             >
//               {/* <AiOutlineArrowLeft /> */} +
//             </button>
//             <button
//               title="scroll right"
//               onClick={slideRight}
//               className="bg-gray-700 text-white p-4 text-xl w-16 h-16 rounded-full hover:bg-black transition"
//             >
//               {/* <AiOutlineArrowRight /> */} -
//             </button>
//           </div>
//         </div>
//         <div
//           id="slider"
//           className="row-container flex gap-9 overflow-x-auto overflow-y-hidden px-4 py-2 scroll-smooth whitespace-nowrap"
//         >
//           {filteredItems.map((item) => (
//             <div key={item.id} className="row-item cursor-pointer transition-all duration-150 ease-in-out outline outline-gray-300 hover:outline-gray-600">
//               <Link href={`/`} className="link flex flex-col justify-between h-full text-black">
//                 <div className="item-header">
//                   <img src={item.img} alt="product" className="w-[21rem]" />
//                 </div>
//                 <div className="item-description p-4">
//                   <p className="text-xl">{item.description}</p>
//                   <p className="item-price text-2xl font-semibold mt-3">{item.price}$</p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TrendingSlider;
