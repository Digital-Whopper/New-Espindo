"use client";
import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import Link from "next/link";
import FloatingCallButton from "./FloatingCallButton";

const Footer = () => {
  const placesToVisit = ["leopardsafari", "onedaytour", "twodaytour"];
  const placesToVisits = ["Leopard safari", "One Day Tour", "Two Day Tour"];
  const customerServices = ["Contact Us", "Privacy Policy", "Refund Policy", "Terms of Service"];

  return (
    <div className="flex bg-[#f4839e] w-full lg:text-left md:text-center sm:text-center text-center pt-10 pb-10">
      <div className="w-full lg:w-4/5 mx-auto flex flex-wrap">
        {/* Logo Section */}
        <div className="w-full lg:w-1/4 pl-2">
          <h2 className="text-white font-bold text-5xl mt-6">ESPINDO</h2>
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
            <p className="mt-4">Ph no: +91-9828372744</p>
            <p className="mt-4">E-mail: espindotour@gmail.com</p>
          </div>
        </div>
      </div>
 <FloatingCallButton/>
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
