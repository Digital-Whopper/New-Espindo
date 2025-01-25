import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FloatingCallButton = () => {
  const icons = [
    {
      href: "/contact",
      src: "/enquiry.png",
      alt: "Contact",
     
    },
    {
      href: "tel:+91-9928062034",
      src: "/call.png",
      alt: "Phone",
    
    },
    {
      href: "https://wa.me/9928062034",
      src: "/whatsapp.png",
      alt: "Whatsapp",
   
    },
  ];

  return (
    <div>
      <section className='fixed right-4  bottom-4 flex flex-col gap-2 flex-wrap z-[99999999]'>
        {icons.map((icon, index) => (
          <div
            key={index}
            className= "class" 
            
          >
            <Link
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-start items-center"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={45}
                height={45}
                className="filter drop-shadow-[1px_1px_1px_#666]"
              />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FloatingCallButton;
