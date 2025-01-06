'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { MdHotel } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { GoTelescopeFill } from "react-icons/go";
import { FaCar } from "react-icons/fa";
import { TiEyeOutline } from "react-icons/ti";
import { IoIosCall } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import Link from "next/link";

const Tours = () => {

    const [expanded, setExpanded] = useState(null);


  const [hoveredIndex, setHoveredIndex] = useState(null);

  const datas = [
    {
        imgSrc:"/nahar.jpg",
        hoverImg:"/nahargarhview.jpg",
        imgAlt:"Nahargarh",
        headingtext:"Nahargarh",
        para:"Nahargarh Fort, located in Jaipur, Rajasthan, India, is a historic fortification that forms part of the trio of forts alongside Amer Fort and Jaigarh Fort. Built in 1734 by Maharaja Sawai Jai Singh II, the founder of Jaipur, Nahargarh means Abode of Tigers. The fort was primarily constructed as a retreat and a defensive structure to protect Jaipur.",
      
        link:"/tour"
    },
    {
        imgSrc:"/patrika.jpg",
        hoverImg:"/patrka.jpg",
        imgAlt:"Patrika",
        headingtext:"Patrika Gate",
        para:"Patrika Gate, located at Jawahar Circle in Jaipur, Rajasthan, is a vibrant and iconic architectural landmark. It serves as a grand entrance to Jawahar Circle Garden, which is among the largest circular parks in Asia. Patrika Gate has become a symbol of Jaipur&apos;s artistic and cultural richness, attracting visitors for its stunning aesthetics and Instagram-worthy charm.",
        
    },
    {
        imgSrc:"/hawa-mahal-inside.jpg",
        hoverImg:"/hnght.jpg",
        imgAlt:"Hawa Mahal ",
        headingtext:"Hawa Mahal",
        para:"Hawa Mahal, also known as the Palace of Winds, is an iconic architectural marvel located in Jaipur, Rajasthan, India. Built in 1799 by Maharaja Sawai Pratap Singh, the structure is a fine example of Rajput architecture infused with Mughal influences. The Hawa Mahal is celebrated for its intricate design and cultural significance.",
        
    },
    {
        imgSrc:"/jal-flower.jpg",
        hoverImg:"/jhalmahal.jpg",
        imgAlt:"Jal Mahal",
        headingtext:"Jal Mahal",
        para:"Jal Mahal, or the Water Palace, is a stunning architectural marvel located in the middle of Man Sagar Lake in Jaipur, Rajasthan, India. This palace is an iconic example of Rajputana architectural finesse and is renowned for its serene beauty and unique setting.",
        
    },
    {
        imgSrc:"/jantar.jpg",
        hoverImg:"/jantarmnt.jpg",
        imgAlt:"Jantar Mantar",
        headingtext:"Jantar Mantar",
        para:"Jantar Mantar in Jaipur is a UNESCO World Heritage Site and one of the largest and best-preserved observatories in India. Built in the early 18th century by Maharaja Sawai Jai Singh II, the founder of Jaipur, this astronomical wonder showcases the scientific and architectural advancements of the time.",
        
    },
    {
        imgSrc:"/birla.jpg",
        hoverImg:"/birla-nightview.jpg",
        imgAlt:"Birla Mandir",
        headingtext:"Birla Mandir",
        para:"Birla Mandir, also known as the Laxmi Narayan Temple, is a prominent Hindu temple located in Jaipur, Rajasthan. Built by the Birla family in 1988, this temple is dedicated to Lord Vishnu (Narayan) and Goddess Laxmi, the deity of wealth and prosperity. It is renowned for its stunning architecture and serene ambiance.",
        
    },
    {
        imgSrc:"/citypalace2.jpg",
        hoverImg:"/citypalace.jpg",
        imgAlt:"City Palace",
        headingtext:"City Palace",
        para:"City Palace in Jaipur is a magnificent royal complex that stands as a testament to Rajasthan&apos;s rich history, culture, and architectural grandeur. Located in the heart of Jaipur, this iconic landmark was built by Maharaja Sawai Jai Singh II in 1727 and served as the seat of the royal family of Jaipur.",
        
    },
    {
        imgSrc:"/amer-view.jpg",
        hoverImg:"/amer-light.jpg",
        imgAlt:"Amber Fort",
        headingtext:"Amber Fort",
        para:"Amber Fort (also spelled Amer Fort) is a majestic and historic fort located in Amer, a town approximately 11 km from Jaipur, Rajasthan. This UNESCO World Heritage Site is a prime example of Rajput architecture and a must-visit landmark for its grandeur, intricate designs, and historical significance.",
         
    },
    {
        imgSrc:"/albert-night.jpg",
        hoverImg:"/albert.jpg",
        imgAlt:"Albert Hall",
        headingtext:"Albert Hall",
        para:"Albert Hall Museum, located in Jaipur, Rajasthan, is one of the oldest museums in India and a prime example of Indo-Saracenic architecture. Built in 1876, it was originally intended as a concert hall but later converted into a museum to preserve Jaipur&apos;s cultural and artistic heritage. It is named after Prince Albert, the consort of Queen Victoria, who visited Jaipur during its construction.",
       
    },
    // Add the rest of your data here...
  ];

  const toggleReadMore = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle the expanded state
  };

  

  return (
    <>
      
      <div className="text-white">

        <div className='img-main flex flex-wrap justify-evenly mt-4 '>
          {datas.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isExpanded = expanded  === index;
            return (
        
              <div key={index} className='img-desc bg-white text-black mt-4 w-[100%] sm:w-[100%] md:w-[45%] lg:w-[30%]
'>
                <div
                  onMouseEnter={() => setHoveredIndex(index)} // Update the hovered image index
                  onMouseLeave={() => setHoveredIndex(null)} // Reset the hover index when mouse leaves
                  className="relative transition-all duration-5000 ease-in-out"
                >
                  <Image
                    aria-hidden="true"
                    src={isHovered ? item.hoverImg : item.imgSrc} // Display hover image if hovered
                    alt={item.imgAlt}
                    width={600}
                    height={400}
                   
                    className="w-full"
                  /> 
                  {/* layout="intrinsic" */}
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-[#f4839e] via-[#e91e63] to-[#000000] text-white px-2 py-1 rounded text-xs sm:text-base">
                  Tour Packages
                  </div>
                </div>
                <div className='my-4 text-start'>
                  <p className='text-sm sm:text-lg pl-2'>{item.headingtext}</p>


                  <p className='text-xs sm:text-sm pl-2 mt-2'><span className='text-[#f4839e]'>Details</span> </p>

                {/* hidden */}
                    
                <div className="read-div mt-2 transition-opacity duration-500 ease-in-out">
  <p className='text-xs sm:text-sm pl-2 '>
    {expanded === index ? item.para : item.para.split(' ').slice(0, 2).join(' ') + '...'}  {/* Show full or short text */} 
  </p>
</div>
           
                {/* hidden end */}

                {/* read more btn */}
            <div className="pl-2 mt-2">
                <button className="btn  text-xs sm:text-sm   text-[#f4839e] transition-all duration-300 ease-in-out"  onClick={() => toggleReadMore(index)}> {expanded === index ? "Read Less" : "Read More..."}</button>
            </div>
              
                </div>

                <div className='flex justify-around border-t py-2'>
                  <div className='text-2xl sm:text-3xl hover:text-[#f4839e]'>
                    <MdHotel />
                  </div>
                  <div className='text-2xl sm:text-3xl hover:text-[#f4839e]'>
                    <GiMeal />
                  </div>
                  <div className='text-2xl sm:text-3xl hover:text-[#f4839e]'>
                  {/* <LuTelescope /> */}
                  <GoTelescopeFill />
                  </div>
                  <div className='text-2xl sm:text-3xl hover:text-[#f4839e]'>
                    <FaCar />
                  </div>
                </div>

                <div className='icon-detail-main'>
                  <div className='flex mt-2'>
                  <Link href='/tour' className='border w-[33%] p-1 flex flex-col items-center justify-center hover:bg-[#f4839e] hover:text-white rounded'>
                    <div className='icon-class'>
                      <span className='text-lg sm:text-2xl'>
                        <TiEyeOutline className='m-auto' />
                      </span>
                      <span className='text-xs sm:text-base'>Tour Details</span>
                    </div>
                    </Link>
                    <Link href='tel:9828372744' className='border w-[33%] p-1 flex flex-col items-center justify-center hover:bg-[#f4839e] hover:text-white rounded'>
                    
                    <div className='icon-class'>
                      <span className='text-lg sm:text-2xl'>
                        <IoIosCall className='m-auto'/>
                      </span>
                      <span className='text-xs sm:text-base'>Call us</span>
                    </div>
                    </Link>
                    <Link href='https://wa.me/9828372744' className='border w-[33%] p-1 flex flex-col items-center justify-center hover:bg-[#f4839e] hover:text-white rounded'>
                    <div className='icon-class'>
                      <span className='text-lg sm:text-2xl'>
                      <AiFillMessage className='m-auto' />
                      </span>
                      <span className='text-xs sm:text-base'>Message</span>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tours;