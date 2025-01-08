"use client";
import { useState } from "react";
import Image from 'next/image';
import { LuClock8 } from "react-icons/lu";
import { VscCircleSmall } from "react-icons/vsc";
import { IoMapOutline } from "react-icons/io5";
import Link from "next/link";



const TravelSection = ({ travelData,tourDetails ,trips, iconName, highlights ,sightseeingIconName,sIncluded,sExcluded}) => {
 

  return (
    <div className="my-10">
      {/* Travel Sections */}
      <section className="container sm:shadow-lg mx-auto p-6 sm:max-w-[90%]  ">

      <div className="flex justify-around flex-col-reverse sm:flex-row">
      <div className="icon-detail-left w-full  sm:w-[90%]">
        <ul  className="mt-3 ">
      {iconName?.map((data) => (
      <li key={data.id} className="flex items-center mt-2"><span>{data.icon}</span> <span className="text-xs sm:text-sm md:text-base pl-2"> {data.name} </span></li>
      
    ))}
    </ul>
    <div className="highlights mt-6">
<h2 className="font-semibold text-lg sm:text-xl">Highlights</h2>
<ul className="highlights-ul ">
{highlights?.map((data) => (
  <li key={data.id}  className=" text-xs sm:text-sm md:text-base mt-2"><span className="font-semibold">{data.id}.</span><span>{data.icon}</span> {data.para}</li> 
))}
</ul>
  </div>
  <div className="sightseeing-main mt-6">
 

 <h2 className="font-semibold text-lg sm:text-2xl">Jaipur Sightseeing Tour</h2>
 <ul className="sightseeing-ul font-semibold">
  <li className=" text-xs text-sm sm:text-base md:text-lg mt-4">Jaipur City Tour #JT-001D</li>  
  <li className=" text-xs  text-sm sm:text-base md:text-lg mt-2">Duration: 9 Hours</li>  
  <li className=" text-xs  text-sm sm:text-base md:text-lg mt-2">Cost: ₹ 2,500/- per person Tax inclusive</li>  
</ul>



</div>
  <div className="sightseeing-icons mt-4">
<div  className="flex items-center "><span><IoMapOutline />
</span> <span className="text-xs sm:text-sm md:text-base pl-2"> Jaipur </span></div>
<div className="flex flex-wrap gap-2">
{sightseeingIconName?.map((data) => (
      <div key={data.id} className="flex items-center mt-4  lg:w-1/4  "><span>{data.icon}
</span> <span className="text-xs sm:text-sm md:text-base pl-2"> {data.detail} </span></div>
      
    ))}
</div>
<p className="text-xs sm:text-sm md:text-base mt-6 text-justify">Immerse yourself in the vibrant hues and rich heritage of Jaipur with our private day tour. Embark on a captivating journey through the Pink City's iconic landmarks, including the majestic Amber Fort, the ornate City Palace, the enchanting Hawa Mahal, and the historic Jantar Mantar. Marvel at the intricate craftsmanship of Jaipur's architecture, steeped in centuries of royal legacy. With a knowledgeable guide by your side, delve into the city's fascinating history and culture. Book your Jaipur Private Day Tour now for an unforgettable experience in India's cultural gem.</p>


<div className="sightseeing-incl-excl mt-8">
  <div className="flex flex-wrap justify-between">
<div className="included-left md:w-[55%] lg:w-[45%]">
<h2 className="font-semibold text-lg sm:text-xl">What's Included</h2>
<ul  className="mt-3 ">
      {sIncluded?.map((data) => (
      <li key={data.id} className="flex items-center mt-2"><span>{data.icon}</span> <span className="text-xs sm:text-sm md:text-base pl-2"> {data.para} </span></li>
      
    ))}
    </ul>
</div>

<div className="excluded-right md:w-[35%] lg:w-[40%] mt-6 md:mt-0">
<h2 className="font-semibold text-lg sm:text-xl ">What's Excluded</h2>
<ul  className="mt-3 ">
      {sExcluded?.map((data) => (
      <li key={data.id} className="flex items-center mt-2"><span>{data.icon}</span> <span className="text-xs sm:text-sm md:text-base pl-2"> {data.para} </span></li>
      
    ))}
    </ul>
</div>
</div>
</div>
 </div>
      </div>
<div className="icon-detail-right w-full sm:w-[40%]">
<Image
            src="/button_image.png"
            alt="enquiry"
            layout="responsive"
            width={250} 
            height={100}
            priority={true}
            quality={75}
          />
</div>
      </div>
     



 

      <h2 className="font-semibold text-lg sm:text-2xl mt-10">Tour Plan</h2>
      <div className="time-main relative mt-4">
      <div className="absolute top-12 left-1 sm:left-2  h-[96%] border-l-2 border-[#E03F64]"></div>

    {travelData.map((item) => (
      <div key={item.id} className="flex items-start mb-10 pl-8 sm:pl-10 relative justify-evenly">
         <div className="absolute top-9 left-[-6px] w-6 h-6 sm:w-8 sm:h-8 bg-black border-2 sm:border-4 border-[#E03F64] rounded-full flex items-center justify-center text-white">
          <LuClock8 className="w-3 h-3 sm:w-4 sm:h-4"/> 
        </div>
    
        <div className="left w-full sm:w-[70%] pr-0 sm:pr-4">
          <h2 className="font-semibold mt-2 uppercase text-sm sm:text-base md:text-md underline decoration-[#E03F64] decoration-2">{item.title}</h2>      
           <h3 className="font-semibold mt-2 text-xs sm:text-sm md:text-base">{item.time}</h3>
          <div className="mt-2 text-xs sm:text-sm md:text-base">
            <p className="text-justify">{item.paraone}</p>
          </div>
        </div>
      
        <div className="right sm:w-48 ">
        {item.imgUrl ? (
        <Link href="https://wa.me/+919828372744">
        
        <Image
            src={item.imgUrl} 
            alt={item.title} 
            layout="intrinsic"
            width={250} 
            height={200}
            priority={true}
            quality={75}
            className="mt-2 hidden sm:block" 
          />
        
        </Link>
        
        ) : null}
        </div>
      </div>
    ))}
  </div>

  {tourDetails?.map((data) => (
  <div key={data.id} className="tour-details mt-6">
    <h2 className="font-semibold text-lg sm:text-xl">{data.title}</h2>
    <ul className="mt-3">
      {['lineone', 'linetwo', 'linethree', 'linefour', 'linefive', 'linesix', 'lineseven', 'lineeight', 'linenine', 'lineten']
        .map((lineKey) => data[lineKey] && (
          <li key={lineKey} className="flex items-center">
           <span> <VscCircleSmall className="text-2xl" /></span>
            <span className="text-xs sm:text-sm md:text-base "> {data[lineKey]} </span>
          </li>
        ))}
    </ul>
  </div>
))}


{trips?.map((data) => (
<div key={data.id} className="tour-details my-4">
{data.title && (
      <h2 className="font-semibold text-lg sm:text-xl mt-6">{data.title}</h2>
    )}
<p className="mt-2 text-xs sm:text-sm md:text-base text-justify">{data.desc}</p>
</div>
))}

</section>

    </div>
  );
};

export default TravelSection;