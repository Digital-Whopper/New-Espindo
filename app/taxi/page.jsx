// pages/taxi.js
'use client';
import Image from 'next/image';
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
      imageSrc: "/images/LEOPARD.webp",
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
      imageSrc: "/images/camel-safari.webp",
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
      imageSrc: "/images/el-safari.webp",
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
      imageSrc: "/images/sawai.webp",
      title: "Ranthambore",
      description: "Tour Type: Customizable 9 hours",
      badge: "5D Sambhar Lake",
      price: "INR 45,000",
      originalPrice: "INR 75,000",
      alt: "Jal Mahal Tour",
      link: "/tour"
    },
  
  ];
  return (
    <div>
      {/* Home Page Section */}
      <section className="max-w-full " 
     >
      <SafariSection    
     backgroundImage="/images/taxi-d.webp"
     mobileImage="/images/taxi-m.webp" 
     
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

</div>} />
      </section>

   
 
      
      <ContentBlock
        imageSrc="https://img.freepik.com/free-photo/close-up-shot-taxi-sign-warm-colours-sunset-with-bokeh-lights-background_181624-54985.jpg?t=st=1733126581~exp=1733130181~hmac=6d32e3dc7406a98d90fc3498d68aa8ce69301cbc8e20ab34a678a929d84024fa&w=900"
        oneHeading="Discover Jaipur: Reliable Sightseeing Taxi Service"
        text="Whether you&apos;re traveling solo or with family, our professional drivers, who know the city well, ensure a smooth and enjoyable experience. Our Jaipur travel agent team is always ready to assist, making our Jaipur sightseeing taxi service an excellent choice for a comfortable and memorable trip.
With our service, you can cover all the significant spots in Jaipur. We guarantee the reliable taxi experience you&apos;re looking for. This sightseeing taxi will make your trip both memorable and enjoyable."
      />

   
      <ContentBlock
        imageSrc="https://img.freepik.com/free-photo/close-up-shot-taxi-sign-warm-colours-sunset-with-bokeh-lights-background_181624-54985.jpg?t=st=1733126581~exp=1733130181~hmac=6d32e3dc7406a98d90fc3498d68aa8ce69301cbc8e20ab34a678a929d84024fa&w=900"
        oneHeading="Jaipur to Khatu Shyam Ji Taxi: Convenient and Reliable"
        text="Planning to visit the Khatu Shyam Ji temple during your Jaipur trip? Our taxi services are the best option for a flexible and enjoyable journey.
Our Jaipur to Khatu Shyam Ji taxi service is a convenient choice. We provide experienced drivers who are familiar with the routes, including shortcuts and traffic-free roads, ensuring a smooth trip. Traveling by taxi offers unmatched freedom and comfort.
You can choose your pickup time, especially when traveling with family. Taxis eliminate the stress of public transport schedules. Our Jaipur to Khatu Shyam Ji taxi services are designed for reliability and safety, with well-maintained vehicles to make your journey pleasant.
With us, you can relax and enjoy the scenic drive through Rajasthan. Our easy booking system, including pre-booking options, ensures your ride is ready when you are. The Khatu Shyam Ji temple is a must-visit destination, known for its rich history and tranquil atmosphere. Dedicated to Lord Krishna, it&apos;s a spiritual highlight of any trip."
        reverse={true} 
      />
      {/* Service Cards Section */}
      <section className="max-w-full text-center">
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
      </section>

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
              <a href='https://web.whatsapp.com/send?phone=+1234567890' className="bg-[#fff] sm:px-6 px-4 py-2">REACH OUR SUPPORT TEAM</a>
            </div>
          </div>
        </div>
      </section>
  



   
    </div>
  );
};

export default page;
