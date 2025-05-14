"use client";
import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import Link from "next/link";
import FloatingCallButton from "./FloatingCallButton";
import Image from "next/image";
const Footer = () => {
  const placesToVisit = ["leopardsafari", "onedaytour", "twodaytour"];
  const placesToVisits = ["Leopard safari", "One Day Tour", "Two Day Tour"];
  const customerServices = ["taxi", "tour", "contact"];

  return (
    <div className="bg-[#f4839e] pt-10 pb-10">
        <div className="flex w-full lg:text-left md:text-center sm:text-center text-center ">
      <div className="w-full lg:w-4/5 mx-auto flex flex-wrap">
        {/* Logo Section */}
        <div className="w-full lg:w-1/4 pl-2">
          <h2 className="text-white font-bold text-5xl mt-6">

<span>
   <Link href="/" className="text-2xl font-bold">
                        <Image src="/white-logo.png" alt="Logo" width={160} height={40} quality={75} priority={true} />
                    </Link>
</span>

          </h2>
        </div>

        {/* Places to Visit Section */}
        <FooterSection title="QUICK LINKS" items={placesToVisit}  />

        {/* Customer Service Section */}
        <FooterSection title="CUSTOMER SERVICE" items={customerServices} />

        {/* Sign Up Section */}
        <div className="w-full lg:w-1/4 pl-2">
          <h3 className="font-bold mt-6 text-white">Contact Us</h3>
          <div className="mt-6 text-white mt-0">
            <p>Address: Plot No. 17 Siddharth Nagar, Near Jawahar Circle, Jagatpura, Jaipur Rajasthan Pin 302017</p>
            <p className="mt-4">Ph no: +91-7790966554</p>
            <p className="mt-4">Ph no: +91-9928062034</p>
            <p className="mt-4">E-mail: espindotour@gmail.com</p>
          </div>
        </div>
      </div>
 <FloatingCallButton/>
   </div>
 <a className="digital-foot text-white w-100 text-center flex justify-center" href="https://digitalwhopper.com/"> Designed &amp; Developed by Digital Whopper </a>
    </div>
  );
};

const FooterSection = ({ title, items }) =>
   ( 
  <div className="w-full lg:w-1/4 pl-2">
    <h3 className="font-bold mt-6 text-white">{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mt-4 text-white">
          <Link href={item}>{item}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
