"use client";
import { useState } from "react";
import Image from 'next/image';
const TravelSection = ({ travelData, readMoreContent }) => {
  const [isReadMoreVisible, setReadMoreVisible] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <div>
      {/* Travel Sections */}
      {travelData.map((item) => (
        <section key={item.id} className="max-w-[100%] sm:max-w-[70%] md:max-w-[70%] lg:max-w-[70%] mx-auto p-4">
          <div className="img-div relative">
            <h2 className="lg:text-5xl md:text-3xl text-2xl font-semibold pb-4 text-[#f4839d] pl-2">
              {String(item.id).padStart(2, "0")}{" "}
              <span className="text-black lg:text-3xl md:text-2xl text-xl">{item.title}</span>
            </h2>
            <div className="absolute lg:top-[3%] md:top-0 top-[-2px] right-[1%]">
              <button
                onClick={() => setFormVisible(true)}
                className="enquirybtn bg-[#f4839d] text-white lg:text-md md:text-sm text-xs lg:px-4 px-2 py-2"
              >
                SEND ENQUIRY
              </button>
            </div>
            <Image width={1300} height={375} layout="responsive" src={item.imgUrl} alt="img" className="lg:h-80 w-full" />
          </div>
          {/* Paras Section */}
          <div className="para-div pt-4">
            <p className="sm:text-base text-sm">{item.description}</p>

            {/* Read More Section */}
            <div
              className={`read-div pt-0 transition-opacity duration-1000 ease-in-out sm:text-base text-sm ${
                isReadMoreVisible ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              {travelData.map((item, index) => (
                <p key={index}>{item.text}</p>
              ))}
            </div>

            {/* Read More Button */}
            <div className="pt-0">
              <button
                onClick={() => setReadMoreVisible(!isReadMoreVisible)}
                className="btn text-[#e03f64] lg:text-base text-sm "
              >
                {isReadMoreVisible ? "Read Less" : "Read More>>"}
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* Enquiry Form */}
      {isFormVisible && (
        <div className="form-div fixed inset-0 w-full opacity-100 transition-opacity duration-1000 ease-in-out z-10">
          <div className="relative inset-0 flex justify-center items-center w-full h-full bg-[rgb(0_0_0_/37%)]">
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
                  className="md:w-[31%] w-[49%] p-2 text-gray-900 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                />
                <input
                  type="number"
                  placeholder="Traveller Count"
                  className="md:w-[31%] sm:w-[50%] w-[49%] p-2 text-gray-900 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                />
              </div>

              <div className="lg:mb-5 mb-2">
                <textarea
                  rows="3"
                  placeholder="Message"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 resize-none"
                ></textarea>
              </div>

              <div className="submit w-full sm:flex sm:items-center sm:justify-between mb-3">
                <div className="sm:w-[60%] w-[98%] text-sm">
                  <ul>
                    <li className="pl-4 before:content-['✔'] before:text-green-500">
                      We assure the privacy of your contact.
                    </li>
                    <li className="pl-4 before:content-['✔'] before:text-green-500">
                      This data will only be used by our team to contact you.
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
                  onClick={() => setFormVisible(false)}
                  className="text-[#f4839d] hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelSection;