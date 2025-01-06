'use client';
import React, { useState } from 'react';
import Tours from './Tours';

const Tour = () => {


  return (
    <section
      className="tour-main relative w-full bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/bg.jpeg')] p-2 sm:2 md:12 lg:12"
    id="packages">
      <div className="tour-bg-gradient absolute inset-0 bg-gradient-to-r from-[#000000cc]/80 via-[#000000cc]/80 to-[#000000cc]/80  to-transparent"></div>
      <div className="relative z-10 container mx-auto text-white">
        <h1 className="text-2xl sm:text-4xl font-bold py-4 text-center">Our Best Jaipur Tour Packages</h1>
        <p className='text-sm sm:text-base text-center'>
          We provide the best tour packages at an affordable price, Book your perfect tour itinerary and explore all the exciting tourist places in jaipur.
        </p>

        <Tours/>
      </div>
    </section>
  );
};

export default Tour;
