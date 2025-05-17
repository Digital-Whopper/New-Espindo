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
 
    
      price: "INR 1600 Per-Person",
      originalPrice: "INR 3200 ",
      alt: "Jhalana Leopard-Safari",
      link: "/tour"
    },
    // camel-safari.webp
    {
      id: 2,
      imageSrc: "/Camel.jpg",
      title: "Camel-Safari",

      badge: "5D Sambhar Lake",
      price: "INR 700 Per-Person",
      originalPrice: "INR 1400",
      alt: "Camel-Safari",
      link: "/tour"
    },
    {
      id: 3,
      imageSrc: "/el-safari.webp",
      title: "Elephant-Safari",
     
      
      price: "INR 11,00 Per-Person",
      originalPrice: "INR 2200",
      alt: "Elephant-Safari",
      link: "/tour"
    },
    {
      id: 4,
      imageSrc: "/sawai.webp",
      title: "Ranthambore Safari Tour",
      price: "INR 1800 Per-Person",
      originalPrice: "INR 3600",
      alt: "Ranthambore Safari Tour",
      link: "/tour"
    },
  
  ];
  const transfers = [
    {
      heading: "Jaipur Local Transfers/ Local Sightseeing in Jaipur/ Luxury Car and Taxi Hire in Jaipur",
     
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
    // {
    //   heading: "All India Taxi Service One Way And Round Trip Taxi Are Available", 
     
    //   tableData: [
    //     {
    //       car: "Sedan Car Toyota Etios / Swift Dezire / 3 seats",
    //       price: "Rs. 3,000",
    //       km: 80,
    //       hours: "8 hours",
    //     },
    //     {
    //       car: "SUV Innova Crysta / 6 seats",
    //       price: "Rs. 4,500",
    //       km: 80,
    //       hours: "8 hours",
    //     },
    //     {
    //       car: "Tempo Traveller / 12 seats",
    //       price: "Rs. 6,500",
    //       km: 80,
    //       hours: "8 hours",
    //     },
    //     {
    //       car: "Mini Coach / 18 seats",
    //       price: "Rs. 13,500",
    //       km: 80,
    //       hours: "8 hours",
    //     },
    //     {
    //       car: "Coach / 35 seats",
    //       price: "Rs. 19,000",
    //       km: 80,
    //       hours: "8 hours",
    //     },
    //   ],
    // },
    // {
    //   heading: "Luxury Car and Taxi Hire in Jaipur", 
     
    //   tableData: [
    //     {
    //       car: "Sedan Car Toyota Etios / Swift Dezire / 3 seats",
    //       price: "Rs. 3,000",
    //       km: 80,
    //       hours: "8 hours",
    //     },
    //     {
    //       car: "SUV Innova Crysta / 6 seats",
    //       price: "Rs. 4,500",
    //       km: 80,
    //       hours: "8 hours",
    //     },
    //     {
    //       car: "Tempo Traveller / 12 seats",
    //       price: "Rs. 6,500",
    //       km: 80,
    //       hours: "8 hours",
    //     },
    //     {
    //       car: "Mini Coach / 18 seats",
    //       price: "Rs. 13,500",
    //       km: 80,
    //       hours: "8 hours",
    //     },
    //     {
    //       car: "Coach / 35 seats",
    //       price: "Rs. 19,000",
    //       km: 80,
    //       hours: "8 hours",
    //     },
    //   ],
    // },
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
       headingcomp="Jaipur to Khatu Shyam Ji Taxi Your Gateway to a Divine Journey"
       fullContent={ <div className="container mx-auto w-[90%] text-xs sm:text-sm">
        <p className="mt-2">Want to dream of a serene getaway to the revered Khatu Shyam Ji temple? Espindo&apos;s <strong>Jaipur to Khatu Shyam Ji taxi</strong> service makes it a hassle-free, fun adventure. Famous for its peaceful environment and powerful spiritual significance, Khatu Shyam Ji is an unmissed destination when a person is exploring Rajasthan.
It is more than a ride into town. It will be a seamless experience on our taxi service, thanks to the knowledge of our cab drivers and the best routes to take for scenic shortcuts or less traveled roads. Say goodbye to any public transport schedules and enjoy picking your desired pickup time.
Do not be worried if you travel with your family; we are here to welcome them all. The best thing is that our all cars and other vehicles keep the same status and so keep well maintenance such that you need not fear while getting safe space in addition to this safety as it keeps plenty of seats. All in all, imagine golden hues of desert attraction rural villages zest as such awareness is anticipated whilst one&apos;s divine destination awaits finally.
It&apos;s never been this easy to book your ride. Espindo is a hassle-free and flexible pre-booking system that allows your taxi to be there at the time you arrive. The journey to Khatu Shyam Ji will be as exciting as it&apos;s made easy by us. Let the temple&apos;s divine energy inspire you as you marvel at its history and spiritual significance. Dedicated to Lord Krishna, Khatu Shyam Ji is more than a destination—it&apos;s a peaceful retreat that rejuvenates your soul.
Choose Espindo&apos;s strong <strong>Jaipur to Khatu Shyam Ji taxi</strong> for a journey that&apos;s reliable, comfortable, and unforgettable. Book now and let us turn your trip into an enchanting experience that combines divine serenity and travel convenience.!
</p>
<h2 className="font-bold sm:text-base text-sm mt-4">Discover Jaipur in Comfort with Espindo&apos;s Jaipur Sightseeing Taxi</h2>
<p className="mt-2">Welcome to Jaipur, the Pink City. Every place that has historic, cultural significance, and even beauty is crowded with that. Now, your luxuriously fantastic journey to see some of the great things about the city is ensured through the extremely comfortable taxi services in Jaipur by Espindo.
Imagine gliding through the colorful streets of Jaipur with our professional and friendly drivers who navigate but elevate your experience. Solo or with friends and family, Jaipur sightseeing taxi will guarantee a smooth ride, safe ride, and memorable ride. Back, relax, and let&apos;s bring the heart of Jaipur closer to you.
Get ready to find the inner soul of a city. From the majestic Amer Fort to the iconic Hawa Mahal, our dependable <strong>Jaipur sightseeing taxi</strong> service will take you through all the must-visit places and some of the hidden gems. Let each moment be magic and every memory timeless.
At Espindo, we&apos;re here to make your travel as stress-free and seamless as possible so that you can soak in the beauty of Jaipur. Book your <strong>Jaipur sightseeing taxi</strong> today and let us redefine the way you discover this enchanting city!
</p>
<h2 className="font-bold sm:text-base text-sm mt-4">Start Your Day with a Mesmerizing Sunrise in Jaipur</h2>
<p className="mt-2">Imagine the sun rising over the city of Jaipur, the sun bathing beautiful sceneries from this place within golden rays. To witness a real sunrise experience, visit the top of Aravalli Hills at Nahargarh Fort. It is magical because of the peaceful ambiance and the bird&apos;s eye view that it has. Another perfect spot to start the morning is Jal Mahal located on the calm water of Man Sagar Lake. With Espindo&apos;s Jaipur sightseeing taxi, we will ensure that you reach the serene spots just in time to capture the magic.</p>

<h2 className="font-bold sm:text-base text-sm mt-4">End Your Day with a Magical Sunset in Jaipur</h2>
<p className="mt-2">By sundown, Jaipur turns into heaven, with sunset images that are awe-inspiring. It is a heaven for photographers and travelers who desire quiet moments and like golden hues on monuments. To get the most magical view, go to Amer Fort, whose golden rays paint the majestic walls of the monument in a truly spellbinding light.
Be it the dawn or the dusk, Espindo makes each and every moment of your stay in Jaipur memorable. Book now to experience this captivating city in all its splendor!
</p>


</div>} />
      </section>

   <div className="w-[100%] sm:w-[100%] md:w-[95%]  lg:w-[80%] mx-auto flex flex-wrap bg-white p-5">
<div className="content  w-[100%] sm:w-[100%] md:w-[100%]  lg:w-[100%]">
  <h2 className='text-4xl font-semibold	mb-3'>Jaipur Car Rental</h2>
  <h3 className='md:text-xl  lg:text-2xl font-semibold mb-1 text-[#e03f64]'>Best offer for Jaipur Full Day Sightseeing.</h3>
  <h3 className='md:text-xl  lg:text-2xl font-semibold mb-1 text-[#e03f64]'>Deluxe Car Rs.2600 + Guide Rs.800 : Rs. 3400/-</h3>
  <h3 className='md:text-xl  lg:text-2xl font-semibold mb-1 text-[#e03f64]'>Now Rs.2999/- Only | No hidden costs Call: +91-7790966554  <br /> <span>& +91-9928062034</span>   </h3>

  <div className="space-y-12">
  {transfers.map((transfer, index) => (
    <div key={index} className='main-texi border-t border-black '>
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
            <th className="bg-gray-100 px-0 md:px-4 lg:px-4 py-2 text-left text-sm font-semibold">Car / Taxi</th>
            <th className="bg-gray-100 px-0 md:px-4 lg:px-4 py-2 text-left text-sm font-semibold">Price</th>
            <th className="bg-gray-100 px-0 md:px-4 lg:px-4 py-2 text-left text-sm font-semibold">Km</th>
            <th className="bg-gray-100 px-0 md:px-4 lg:px-4 py-2 text-left text-sm font-semibold">Hours</th>
          </tr>
        </thead>
        <tbody>
          {transfer.tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-2 md:px-4 lg:px-4 py-2 text-sm">{row.car}</td>
              <td className="px-2 md:px-4 lg:px-4 py-2 text-sm font-semibold">{row.price}</td>
              <td className="px-2 md:px-4 lg:px-4 py-2 text-sm">{row.km}</td>
              <td className="px-2 md:px-4 lg:px-4 py-2 text-sm">{row.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ))}
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
        <div className="bg-cover bg-center lg:p-0 p-0" style={{ backgroundImage: "url('/texi-image-banner.png')" }}>
          <div className=" inset-0 bg-[#292929] opacity-80"></div>
          <div className="inset-0 flex items-center justify-around flex-wrap sm:text-start text-center w-full">
            <div className="lg:w-[64%] sm:w-[80%] w-[90%]">
              <h3 className="sm:text-3xl text-lg font-bold text-white">All India Taxi Service One Way And Round Trip Taxi Are Available</h3>
              <p className="text-sm lg:pt-6 sm:pt-8 pt-4 text-white">
              Receive top-notch support throughout your journey, with our team always ready to assist for a smooth and enjoyable experience.
              </p>
            </div>
            <div className="lg:w-[24%] sm:w-[80%] w-[90%] lg:pt-10 font-semibold md:text-sm text-xs mt-[40px]">
            <div className="tour_right head_right tour_help tour-ri-com w-[100%] sm:w-[100%] md:w-[40%]  lg:w-[100%]">
<div className='w-[100%] sm:w-[100%] md:w-[70%]  lg:w-[70%] border border-[#e2e2e2] m-auto'>
	<h3 className='font-semibold p-[10px] bg-[#253d52] text-white'>Help &amp; Support</h3>
						<div className="tour_help_1 text-center bg-white">
							<h4 className="text-center text-xl text-[#e03f64] font-semibold pt-2">Call Us Now</h4>
							<h4 className="text-center text-xl font-semibold my-2 flex"> <span className='flex m-auto items-center'><IoCall />+91-7790966554</span></h4> 
              <h4 className="text-center text-xl font-semibold py-2 flex"> <span className='flex m-auto items-center'><IoCall />+91-9928062034</span></h4>
              
              </div>

  </div>
					
					</div>
                
            </div>
         <div className="reach-button text-center px-4 sm:px-4 md:px-4 lg:px-4 py-2 my-[40px]">
             <a href='https://web.whatsapp.com/send?phone=+91-7790966554' className="bg-[#fff] text-[10px]
 md:text-base lg:text-base
 sm:px-6 px-4 py-2">REACH US TO BOOK TEAM</a>
            
            </div>
          </div>
        </div>
      </section>
  



   
    </div>
  );
};

export default page;
