// pages/taxi.js
'use client';
import Image from 'next/image';
import { IoCall } from "react-icons/io5";
import { FaTaxi } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { MdEmojiTransportation } from "react-icons/md";
import ContentBlock from '../component/ContentBlock';
import SafariSection from '../component/SafariSection';
import ContentPopup from '../component/ContentPopup';


const ServiceCard = ({ icon, title, description }) => (
  <div className="lg:w-[25%] sm:w-[90%] flex flex-col items-center bg-[#f9f9ff] p-[30px] hover:text-white hover:bg-[#f4839e] transition-all duration-300 ease-in-out mt-6 lg:mt-0">
    <div>{icon}</div>
    <h3 className="pt-6 font-semibold text-base">{title}</h3>
    <p className="text-center pt-6 font-light text-sm">{description}</p>
  </div>
);

const page = () => {
 
  const items = [
    {
      id: 1,
      imageSrc: "/LEOPARD.webp",
      title: "Jhalana Leopard-Safari",
      description: "Tour Type: Customizable 9 hours",
      badge: "5D Sambhar Lake",
      price: "INR 45,000",
      originalPrice: "INR 75,000",
      alt: "Sambhar Lake",
      link: "/tour"
    },
    {
      id: 2,
      imageSrc: "/camel-safari.webp",
      title: "Camel-Safari",
      description: "Tour Type: Customizable 9 hours",
      badge: "5D Sambhar Lake",
      price: "INR 45,000",
      originalPrice: "INR 75,000",
      alt: "NaharGadh Tour",
      link: "/tour"
    },
    {
      id: 3,
      imageSrc: "/el-safari.webp",
      title: "Elephant-Safari",
      description: "Tour Type: Customizable 9 hours",
      badge: "5D Sambhar Lake",
      price: "INR 45,000",
      originalPrice: "INR 75,000",
      alt: "City Palace Tour",
      link: "/tour"
    },
    {
      id: 4,
      imageSrc: "/sawai.webp",
      title: "Ranthambore",
      description: "Tour Type: Customizable 9 hours",
      badge: "5D Sambhar Lake",
      price: "INR 45,000",
      originalPrice: "INR 75,000",
      alt: "Jal Mahal Tour",
      link: "/tour"
    },
  
  ];
  const transfers = [
    {
      heading: "Jaipur Local Transfers",
     
      tableData: [
        {
          car: "Sedan Car Toyota Etios / Swift Dezire / 3 seats",
          price: "Rs. 3,000",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "SUV Innova Crysta / 6 seats",
          price: "Rs. 4,500",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "Tempo Traveller / 12 seats",
          price: "Rs. 6,500",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "Mini Coach / 18 seats",
          price: "Rs. 13,500",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "Coach / 35 seats",
          price: "Rs. 19,000",
          km: 80,
          hours: "8 hours",
        },
      ],
    },
    {
      heading: "Local Sightseeing in Jaipur", 
     
      tableData: [
        {
          car: "Sedan Car Toyota Etios / Swift Dezire / 3 seats",
          price: "Rs. 3,000",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "SUV Innova Crysta / 6 seats",
          price: "Rs. 4,500",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "Tempo Traveller / 12 seats",
          price: "Rs. 6,500",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "Mini Coach / 18 seats",
          price: "Rs. 13,500",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "Coach / 35 seats",
          price: "Rs. 19,000",
          km: 80,
          hours: "8 hours",
        },
      ],
    },
    {
      heading: "Luxury Car and Taxi Hire in Jaipur", 
     
      tableData: [
        {
          car: "Sedan Car Toyota Etios / Swift Dezire / 3 seats",
          price: "Rs. 3,000",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "SUV Innova Crysta / 6 seats",
          price: "Rs. 4,500",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "Tempo Traveller / 12 seats",
          price: "Rs. 6,500",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "Mini Coach / 18 seats",
          price: "Rs. 13,500",
          km: 80,
          hours: "8 hours",
        },
        {
          car: "Coach / 35 seats",
          price: "Rs. 19,000",
          km: 80,
          hours: "8 hours",
        },
      ],
    },
  ];
  return (
    <div className="bg-[#eeeeee]" >
      {/* Home Page Section */}
      <section className="max-w-full " 
     >
      <SafariSection    
     backgroundImage="/taxi-d.webp"
     mobileImage="/taxi-m.webp" 
     
      />
       
       <ContentPopup 
       headingcomp="Explore Jaipur with Espindo Jaipur Sightseeing Taxi"
       fullContent={ <div className="container mx-auto w-[90%] text-xs sm:text-sm">
        <p className="mt-2">Jaipur city is brimming with charm and heritage. With a private taxi, you can comfortably visit the top attractions, saving time while enhancing your enjoyment. To make the most of your trip, you can choose us to add value to your journey.
Espindo offers Jaipur sightseeing taxi services with cooperative and helpful drivers. Our team is dedicated to bringing an authentic essence to your trip. We employ trusted drivers to ensure your safety and security.
</p>
<h2 className="font-bold sm:text-base text-sm">Sunrise View in Jaipur</h2>
<p className="mt-2"> Nahargarh Fort is the ideal spot to enjoy a sunrise in Jaipur. Built on the Aravalli hills, it offers breathtaking views and a serene environment, making it the perfect way to start your day. Another great option is Jal Mahal, located in Man Sagar Lake.</p>
<p className="mt-2">Visiting these places early ensures a peaceful experience, and our Jaipur sightseeing taxi service ensures you arrive on time. You can rely on us for a memorable sunrise experience in Jaipur.</p>
<h2 className="font-bold sm:text-base text-sm mt-4">Sunset View in Jaipur</h2>
<p className="mt-2">Jaipur boasts some of the most stunning sunset views, making it a paradise for photographers and travelers seeking tranquil moments. If you enjoy sunsets, there are specific locations in Jaipur worth visiting.</p>
<p className="mt-2">For a magical view, head to Amer Fort. Its peaceful ambiance is perfect for relaxing and unwinding. The golden rays illuminate the fort&apos;s walls as the sun sets, creating a mesmerizing sight. Our Jaipur sightseeing taxi offers a comfortable and reliable way to enjoy these moments.</p>
<p className="mt-2">These locations significantly enhance Jaipur&apos;s beauty during sunsets.</p>
<h2 className="font-bold sm:text-base text-sm">Discover Jaipur: Reliable Sightseeing Taxi Service</h2>
<p className="mt-2">Whether you&apos;re traveling solo or with family, our professional drivers, who know the city well, ensure a smooth and enjoyable experience. Our Jaipur travel agent team is always ready to assist, making our Jaipur sightseeing taxi service an excellent choice for a comfortable and memorable trip. With our service, you can cover all the significant spots in Jaipur. We guarantee the reliable taxi experience you&apos;re looking for. This sightseeing taxi will make your trip both memorable and enjoyable.</p>
<h2 className="font-bold sm:text-base text-sm">Jaipur to Khatu Shyam Ji Taxi: Convenient and Reliable</h2>
<p className="mt-2">Planning to visit the Khatu Shyam Ji temple during your Jaipur trip? Our taxi services are the best option for a flexible and enjoyable journey. Our Jaipur to Khatu Shyam Ji taxi service is a convenient choice. We provide experienced drivers who are familiar with the routes, including shortcuts and traffic-free roads, ensuring a smooth trip. Traveling by taxi offers unmatched freedom and comfort. You can choose your pickup time, especially when traveling with family. Taxis eliminate the stress of public transport schedules. Our Jaipur to Khatu Shyam Ji taxi services are designed for reliability and safety, with well-maintained vehicles to make your journey pleasant. With us, you can relax and enjoy the scenic drive through Rajasthan. Our easy booking system, including pre-booking options, ensures your ride is ready when you are. The Khatu Shyam Ji temple is a must-visit destination, known for its rich history and tranquil atmosphere. Dedicated to Lord Krishna, it&apos;s a spiritual highlight of any trip.</p>

</div>} />
      </section>

   <div className="w-[100%] sm:w-[100%] md:w-[95%]  lg:w-[80%] mx-auto flex flex-wrap bg-white p-5">
<div className="content  w-[100%] sm:w-[100%] md:w-[60%]  lg:w-[70%]">
  <h2 className='text-4xl font-semibold	mb-3'>Jaipur Car Rental</h2>
  <h3 className='md:text-xl  lg:text-2xl font-semibold mb-1 text-[#e03f64]'>Best offer for Jaipur Full Day Sightseeing.</h3>
  <h3 className='md:text-xl  lg:text-2xl font-semibold mb-1 text-[#e03f64]'>Deluxe Car Rs.2600 + Guide Rs.800 : Rs. 3400/-</h3>
  <h3 className='md:text-xl  lg:text-2xl font-semibold mb-1 text-[#e03f64]'>Now Rs.2999/- Only | No hidden costs Call: +91-9828372744  </h3>

  <div className="space-y-12">
  {transfers.map((transfer, index) => (
    <div key={index}>
      {/* Conditionally render heading only if available */}
      {transfer.heading && (
        <h3 className="flex items-center text-[#213d44] font-semibold text-lg mt-12 mb-5">
          <span className='flex mr-2 items-center'><FaTaxi /></span> {transfer.heading}
        </h3>
      )}

      {/* Table rendering with Tailwind CSS */}
      <table className="min-w-full table-auto border-collapse bg-white">
        <thead>
          <tr>
            <th className="bg-gray-100 px-4 py-2 text-left text-sm font-semibold">Car / Taxi</th>
            <th className="bg-gray-100 px-4 py-2 text-left text-sm font-semibold">Price</th>
            <th className="bg-gray-100 px-4 py-2 text-left text-sm font-semibold">Km</th>
            <th className="bg-gray-100 px-4 py-2 text-left text-sm font-semibold">Hours</th>
          </tr>
        </thead>
        <tbody>
          {transfer.tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-2 text-sm">{row.car}</td>
              <td className="px-4 py-2 text-sm font-semibold">{row.price}</td>
              <td className="px-4 py-2 text-sm">{row.km}</td>
              <td className="px-4 py-2 text-sm">{row.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ))}
</div>

</div>
<div className="tour_right head_right tour_help tour-ri-com w-[100%] sm:w-[100%] md:w-[40%]  lg:w-[30%]">
  <div className='w-[100%] sm:w-[100%] md:w-[70%]  lg:w-[70%] border border-[#e2e2e2] m-auto'>
	<h3 className='font-semibold p-[10px] bg-[#253d52] text-white'>Help &amp; Support</h3>
						<div className="tour_help_1 text-center">
							<h4 className="text-center text-xl text-[#e03f64] font-semibold mt-2">Call Us Now</h4>
							<h4 className="text-center text-xl font-semibold my-2 flex"> <span className='flex m-auto items-center'><IoCall />+91-9828372744</span></h4> </div>

  </div>
					
					</div>



          
   </div>
 
      
{/*       
      <section className="w-[70%] m-auto text-center">
        <h2 className="sm:text-3xl text-2xl font-semibold">What Services we offer to our clients</h2>
        <p className="text-sm text-[#777777] pt-4">Eco-Friendly Travel for the Eco-Conscious Rider.</p>
      </section>
      <section className="max-w-full mt-10 mb-20">
        <div className="flex justify-center flex-wrap">
          <ServiceCard
            icon={<FaTaxi />
            }
            title="Taxi Service"
            description="Usage of the Internet is becoming more common due to rapid advancement of technology and power."
          />
          <ServiceCard
            icon={<ImOffice />            }
            title="Office Pick-ups"
            description="Usage of the Internet is becoming more common due to rapid advancement of technology and power."
          />
          <ServiceCard
            icon={<MdEmojiTransportation />
            }
            title="Event Transportation"
            description="Usage of the Internet is becoming more common due to rapid advancement of technology and power."
          />
        </div>
      </section> */}

      {/* Support Section */}
      <section className="max-w-full">
        <div className="relative bg-cover bg-center lg:p-36 p-28" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/soft-evening-light-captures-moving-vehicles-from-cars-view_157027-4343.jpg?t=st=1733125106~exp=1733128706~hmac=27948dd50b5e0deb92f0812b0d2830c1129c7fbecf744d8c9b564baea27e29b9&w=1380')" }}>
          <div className="absolute inset-0 bg-[#292929] opacity-80"></div>
          <div className="absolute inset-0 flex items-center justify-around flex-wrap sm:text-start text-center w-full">
            <div className="lg:w-[60%] sm:w-[80%] w-[90%]">
              <h3 className="sm:text-3xl text-xl font-bold text-white">Experience Great Support</h3>
              <p className="text-sm lg:pt-6 sm:pt-8 pt-4 text-white">
              Receive top-notch support throughout your journey, with our team always ready to assist for a smooth and enjoyable experience.
              </p>
            </div>
            <div className="lg:w-[19%] sm:w-[80%] w-[90%] lg:pt-10 font-semibold md:text-sm text-xs">
              <a href='https://web.whatsapp.com/send?phone=+1234567890' className="bg-[#fff] sm:px-6 px-4 py-2">REACH US TO BOOK TEAM</a>
            </div>
          </div>
        </div>
      </section>
  



   
    </div>
  );
};

export default page;
