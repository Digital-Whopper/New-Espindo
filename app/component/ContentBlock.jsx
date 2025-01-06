import React from 'react'
import Image from "next/image";
const ContentBlock = ({ imageSrc, text,oneHeading, twoHeading, reverse = false }) => {
  return (
    <div>
      
 <div className={`flex items-center justify-center flex-wrap p-[20px] pt-[0px]  
  ${reverse ? 'md:flex-row-reverse lg:flex-row-reverse' : 'flex-row'} `}>
      <Image width={500} height={500} src={imageSrc} alt="Content" className=" w-full lg:w-1/2 md:full sm:w-full h-auto border-2 border-solid-black rounded-[14px]" />
      
      <div className="content-class w-full lg:w-1/2 md:w-full sm:full text-center pt-6">
      <h2 className='text-2xl font-bold'>{oneHeading}</h2>
      <h2 className='text-2xl font-bold' >{twoHeading}</h2>
      <p className="text-justify w-full text-gray-700 text-base leading-relaxed  p-3">{text}</p>
      </div>
      
    </div>






    </div>
  )
}

export default ContentBlock