"use client";

import { useState } from "react";
import Image from 'next/image';
const DestinationSection = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  // Store the travel data in state
  const [travelData, setTravelData] = useState([
    {
      id: 1,
      title: "Elephant Safari",
      imgUrl: "/el-amer.jpg",
      description: "Experience the snow-covered landscapes. This is more text while adding text so that I can clearly see the Read More button. Let&apos;s see how it works with more content being added to the description text. The snow-covered landscapes are serene and beautiful, perfect for a winter vacation.",
      showMore: false,  // Initially hide the rest of the description
    },
    {
      id: 2,
      title: "Ranthmbore",
      imgUrl: "/Bagh.jpg",
      description: "Experience the snow-covered landscapes. This is more text while adding text so that I can clearly see the Read More button. Beaches are relaxing, and the warm sun makes for a perfect getaway to a tropical paradise.",
      showMore: false,
    },
    {
      id: 3,
      title: "Leopard Safari",
      imgUrl: "/safari.jpg",
      description: "Experience the snow-covered landscapes. This is more text while adding text so that I can clearly see the Read More button. Deserts are vast and unique, offering an experience of tranquility and beauty.",
      showMore: false,
    },
    {
      id: 4,
      title: "Camel-Safari",
      imgUrl: "/pixelcut-export.jpg",
      description: "Experience the snow-covered landscapes. This is more text while adding text so that I can clearly see the Read More button. Mountains offer breathtaking views and hiking experiences that leave you feeling accomplished and at peace.",
      showMore: false,
    },
  ]);

  // Function to toggle description visibility
  const toggleDescription = (id) => {
    setTravelData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, showMore: !item.showMore } : item
      )
    );
  };

  return (
    <section className="max-w-full pt-4">
      <div className="fourimg-div flex flex-wrap justify-around gap-6">
        {travelData.map((item) => (
          <div key={item.id} className="img1 p-[15px] border-2 border-black rounded-2xl lg:w-[22%] sm:w-[45%] w-[96%] sm:mt-0 mt-4">
            <h2 className="md:text-3xl text-2xl font-semibold pb-4 pl-2">
              {item.id} <span className="text-black md:text-2xl text-xl">{item.title}</span>
            </h2>
            <Image src={item.imgUrl} alt={item.title} width={680} height={450} />
            <p className="pt-2">
              {item.showMore ? item.description : `${item.description.substring(0, 150)}...`}
            </p>
            <div className="pt-2 ">
              <button
                onClick={() => toggleDescription(item.id)}
                className="enq-btn text-[#f4839d] pt-1 pb-1 pr-2 pl-2 text-sm text-white inline-block
"
              >
                {item.showMore ? "Show Less" : "Read More >"}
              </button>
            </div>
            <div className="pt-2 text-center">
              <button
                onClick={() => setFormVisible(!isFormVisible)}
                className="enq-btn bg-[#f4839d] pt-1 pb-1 pr-2 pl-2 text-sm text-white inline-block
"
              >
                Enquiry now
              </button>
            </div>
          </div>
        ))}
      </div>

      {isFormVisible && (
        <div className="form-div fixed inset-0 w-[100%] opacity-100 transition-opacity duration-1000 ease-in-out z-[99999]">
          <div className="relative inset-0 flex justify-center items-center w-[100%] h-[100%] bg-[rgb(0_0_0_/37%)]">
            <form className="relative bg-white p-6 rounded-lg shadow-lg z-70 sm:w-[55%] md:w-[55%] lg:[55%] w-[90%]">
              <div className="lg:pb-4 pb-2">
                <h3 className="lg:text-2xl md:text-xl">Superb Choice!</h3>
              </div>
              <div className="lg:mb-5 lg:flex lg:justify-between">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="lg:w-[42%] p-2 text-gray-900 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full lg:mb-0 mb-2"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="lg:w-[55%] p-2 text-gray-900 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 w-full lg:mb-0 mb-2"
                />
              </div>

              <div className="lg:mb-5 md:flex md:justify-between mb-2">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="md:w-[32%] w-full mb-2 md:mb-0 p-2 text-gray-900 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                />
                <input
                  type="date"
                  placeholder="Date of Travel"
                  className="md:w-[31%] w-[100%] p-2 mb-2 md:mb-0 text-gray-900 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                />
                <input
                  type="number"
                  placeholder="Traveller Count"
                  className="md:w-[31%] sm:w-[100%] w-[100%] p-2 text-gray-900 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                />
              </div>

              <div className="lg:mb-5 mb-2">
                <textarea
                  name="msg"
                  id="msg"
                  rows="3"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 resize-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="submit w-full sm:flex sm:items-center sm:justify-between mb-3">
                <div className="sm:w-[60%] w-[98%] text-sm">
                  <ul>
                    <li className="pl-4 before:content-['✔'] before:text-green-500 before:absolute before:left-4 lg:before:top-[79%] md:before:top-[75%]">
                      We assure the privacy of your contact
                    </li>
                    <li className="pl-4 before:content-['✔'] before:text-green-500 before:absolute before:left-4 lg:before:top-[85%] md:before:top-[81%]">
                      This data will only be used by our team to contact you and no other purposes.
                    </li>
                  </ul>
                </div>
                <div className="sm:w-[35%] w-[98%] sm:mt-0 mt-4">
                  <button className="w-full bg-[#f4839d] rounded py-2 text-sm text-white">
                    Send Me Details
                  </button>
                </div>
              </div>

              <div className="absolute top-[10px] sm:left-[95%] left-[91%] close">
                <button
                  className="text-[#f4839d] hover:text-gray-700"
                  onClick={() => setFormVisible(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default DestinationSection;
