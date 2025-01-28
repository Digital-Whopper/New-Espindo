'use client';
import React from 'react'
import SafariSection from "../component/SafariSection";
import TravelSection from '../component/TravelSection';
import ProductSlider from '../component/ProductSlider';
import { MdGroups } from "react-icons/md";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { LuClock8 } from "react-icons/lu";
import { CiMobile3 } from "react-icons/ci";
import { RiUserVoiceFill } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidArrowToRight } from "react-icons/bi";
import { MdCancelScheduleSend } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { TbXboxXFilled } from "react-icons/tb";
import ContentPopup from '../component/ContentPopup';
const page = () => {

  const iconName=[
    {
      id:1,
      icon:<MdGroups />,
      name:"Ages 0-85"
    },
    {
      id:2,
      icon:<PiClockCounterClockwiseFill />,
      name:"Duration: 8-9 hours"
    },
    {
      id:3,
      icon:<LuClock8/>,
      name:"Start time: Check availability"
    },
    {
      id:4,
      icon:<CiMobile3 />,
      name:"Mobile ticket"
    },
    {
      id:5,
      icon:<RiUserVoiceFill />  ,
      name:"Live guide: German, Japanese, English, Italian, French, Spanish"
    },
    
      ];
    
      const highlights=[
        {
          id:1,
          para:"An action-packed private tour of Jaipur&apos;s top attractions"
        },
        {
          id:2,
          para:"Explore Jaipur from Jantar Mantar to Hawa Mahal."
        },
        {
          id:3,
          para:"Private hotel pickup and drop-off"
        },
        {
          id:4,
          para:"Learn about the history of Jaipur and Rajasthan"
        },
      ];
    
      const sightseeingIconName=[
        {
          id:1,
          icon:<LuClock8/>,
          detail:"8-hours"
        },
        {
          id:2,
          icon:<IoIosPerson />  ,
          detail:"Guided"
        },
        {
          id:3,
          icon:<FaCar />      ,
          detail:"Pickup offered"
        },
        {
          id:4,
          icon:<IoLocationOutline />      ,
          detail:"Private Tour"
        },
        {
          id:5,
          icon:<BiSolidArrowToRight />      ,
          detail:"Skip-the-Line Entry"
        },
        {
          id:6,
          icon:<MdCancelScheduleSend />      ,
          detail:"Free Cancellation"
        },
    
      ];
    
      const sIncluded=[
        {
          id:1,
          icon:<TiTick />  ,
          para:"Chauffeur Driven A/C Private Vehicle for Sightseeing" ,
        },
        {
          id:2,
          icon:<TiTick />  ,
          para:"Convenient pickup and drop-off service from hotel, airport, and railway stations." ,
        },
        {
          id:3,
          icon:<TiTick />  ,
          para:"Exclusive Private Tours" ,
        },
        {
          id:4,
          icon:<TiTick />  ,
          para:"Fuel charge, parking, and all other taxes." ,
        },
        {
          id:5,
          icon:<TiTick />  ,
          para:"Bottled Water" ,
        },
      ];
    
      const sExcluded=[
        {
          id:1,
          icon:<TbXboxXFilled />  ,
          para:"Any Meals" ,
        },
        {
          id:2,
          icon:<TbXboxXFilled />  ,
          para:"Personal expenses" 
        },
        {
          id:3,
          icon:<TbXboxXFilled />  ,
          para:"Monuments entrance fees / Camera fees" 
        },
        {
          id:4,
          icon:<TbXboxXFilled />  ,
          para:"Driver&apos;s tips & gratuities (recommended)" 
        }
      
      ]
        const travelData = [
            {
              id: 1,
              title: "Departure",
              time:"8:30 AM:",
              paraone: "Get ready to explore Jaipur with our guided city tour! Our driver will pick you up from your hotel and take you on a journey through the vibrant sights of this beautiful city.",
             
            },
            {
                id: 2,
                title: "Hawa Mahal",
                time:"9:00 AM:",
                paraone: "One of Jaipur&apos;s most iconic landmarks, the Hawa Mahal or Palace of Winds is a stunning architectural masterpiece from the 18th century. Designed by Ustad Lal Chand, this magnificent structure is made with pink and red sandstone to blend in with the Pink City&apos;s color scheme. Its intricate design and grandeur make it a must-visit for tourists in Jaipur.",
                
              },
              {
                id: 3,
                title: "Jantar Mantar",
                time:"10:00 AM:",
                paraone: "The Jantar Mantar, a historical astronomical observatory built by Sawai Jai Singh II in 1734 AD, is an impressive site to behold. Located in Jaipur, it holds the title of being the largest historical observatory in India with its collection of 19 instruments made from stone and brass. Its significance has also been recognized internationally as it was declared a UNESCO World Heritage Site.",
              
                
              },
              {
                id: 4,
                title: "City Palace",
                imgUrl: "/citypalace-circle.png",
                time:"11:00 AM:",
                paraone: "The City Palace of Jaipur, a stunning architectural masterpiece, is a must-see on any visit to the city. Combining elements of Rajasthani, European and Mughal styles, this palace also serves as the residence for the royal family of Jaipur. Its exquisite design and rich history make it an essential stop on any tour of Jaipur."
              },
              {
                id: 5,
                title: "Lunch Break",
                time:"1:00 PM:",
                paraone: "On your lunch break, we will take you to one of the best restaurants in Jaipur for a delicious and satisfying meal.",
               
              },
              {
                id: 6,
                title: "Amber Fort",
                time:"2:00 PM:",
                imgUrl: "/amer-circle.png",
                paraone: "The magnificent Amer Fort, a UNESCO World Heritage Site, was built in 1592 and took almost two centuries to complete. Its impressive structure dominates the skyline of Jaipur and serves as a symbol of its rich history. This historical monument is an architectural wonder that has stood the test of time since its completion in the 18th century."
              },
              {
                id: 7,
                title: "Panna Meena ka Kund",
                time:"3:30 PM: ",
                paraone: "This stepwell, known for its picturesque symmetrical stairways, is not only a historic site but also an impressive rainwater catchment. With its intricate design and functionality, it has stood the test of time as a remarkable architectural marvel."
              },
              {
                id: 8,
                title: "Jal Mahal",
                time:"4:15 PM: ",
                imgUrl: "/jal-bird-circle.png",
                paraone: "The next stop on our Jaipur tour is the stunning Lake Palace, a palace that sits in the middle of Man Sagar Lake. With five floors - four submerged in water and one over it - and an exquisite garden, this palace is truly a sight to behold."
              },
              {
                id: 9,
                title: "Royal Gaitor",
                time:"4:30 PM:",
                paraone: "Another must-visit monument in Jaipur is the Royal Gaitor, a resting place for past rulers. This site features several Chhatris, or cenotaphs, dedicated to the Maharajas. It&apos;s a beautiful and historic spot that should not be missed on your trip to Jaipur."
              },
              {
                id: 10,
                title: "Return",
                time:"5:30 PM:",
                paraone: "Upon completion of your trip, our driver will drop you off at your hotel or any destination of your choice in Jaipur. We want to ensure that you have a comfortable and convenient experience with us until the very end of your journey."
              },
          ];
        
        const tourDetails=[
          {
            id:1,
            title:"What&apos;s included",
            lineone:"All Sightseeing & Transfers by Private A/C Car.",
            linetwo:"Private transportation with friendly driver.",
            linethree:"Fuel (Petrol/Diesel/Gasoline), Parking Charges, and all taxes.",
            linefour:"Professional Tour Guide ( Available with Tour Options )",
            linefive:"Bottled water",
          },
          {
            id:2,
            title:"What&apos;s not included",
            lineone:"Monuments Entrance Fees / Camera Fees",
            linetwo:"Meals & Other Expenses",
            linethree:"Air /Train / Bus Fare",
            linefour:"Driver&apos;s and Guide&apos;s Tips",
            linefive:"Entry/Admission - Hawa Mahal - Palace of Wind",
            linesix:"Entry/Admission - City Palace of Jaipur",
            lineseven:"Entry/Admission - Jantar Mantar - Jaipur",
            lineeight:"Entry/Admission - Albert Hall Museum",
            linenine:"Entry/Admission - Royal Gaitor Tumbas",
            lineten:"Entry/Admission - Jal Mahal"
          },
          
        ];
    
        const trips=[
          {
            id:1,
            title:"What to expect",
            desc:"After hotel pickup in a comfortable, air-conditioned vehicle, enjoy the scenic ride to Jal Mahal, known as Jaipur&apos;s floating palace. The 18th-century royal Maharajah residence on Man Sagar Lake makes for an unforgettable photo."
          },
          {
            id:2,
            desc:"Learn about the history of Jaipur, a royal capital founded in 1727. Get a look at the city&apos;s trademark downtown and discover how it came to be painted pink. Visit Hawa Mahal, or Palace of Winds, with its beehive-shaped facade—once a purdah screen for Rajput women. See Jantar Mantar, a centuries-old astronomical observatory, and the City Palace, home to Rajasthan&apos;s royal family, before drop-off to your hotel after a full day of sightseeing.."
          },
    {
      id:3,
      title:"Help",
      desc:"If you have questions about this tour or need help making your booking, we&apos;d be happy to help. Just call the number below and reference the product code: 4"
    },
    {
      id:4,
      title:"Note:",
      desc:"This itinerary is customizable based on your preferences and time constraints. Please wear comfortable clothing and footwear suitable for walking and exploring historical sites.Don&apos;t forget to carry sunscreen, sunglasses, and a hat to protect yourself from the sun."
    },
    {
      id:5,
      title:"Our liabilities & limitations:",
      desc:"Please note that after the finalization of the tour/service cost, if there are any hikes in entrance fees of monuments/museums, taxes, fuel cost or guide charges by the Govt of India and Rajasthan state government the same would be charged as extra."
    }
        ]
    
    
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
  return (
    <div>

<SafariSection    
     backgroundImage="/2day-d.webp"
     mobileImage="/2daytour-m.webp" 
     
      />
     <ContentPopup  headingcomp="Unravel Jaipur&apos;s Magic – Espindo&apos;s Two-Day Escape"
          fullContent={<div className="container mx-auto w-[90%] text-xs sm:text-sm">
            <p className="mt-2">For a deeper dive into the wonders of Jaipur, Espindo’s <strong>Jaipur 2-day itinerary</strong> offers a curated experience blending culture, history, and leisure.
</p>
<h2 className="font-bold sm:text-base text-sm mt-4">Day 1:</h2>
<p className="mt-2">Begin with a scenic drive to the regal Amer Fort where your guide will weave a tapestry of interesting and fascinating tales of its history. Take some mind-blowing shots at the floating Jal Mahal, before heading off to the grand City Palace, and uncover its rich heritage through museums filled with royal artefacts and textiles.
Add a touch of astronomy to your day by visiting Jantar Mantar, one of the ancient observatories that houses fabulous instruments. A warm and golden sunset ends your evening at the Nahargarh Fort, casting a magical hue over the city.

</p>
<h2 className="font-bold sm:text-base text-sm mt-4">Day 2:</h2>
<p className="mt-2">Begin the day with a quiet walk through City Park, a great place to de-stress. Now, dive into Jaipur&apos;s modern feel at World Trade Park, a shopper&apos;s delight and a great place for eating and entertainment.
Explore Rajasthan&apos;s history and art at the Albert Hall Museum and wrap your experiences there with visits to GT Mall, from where you can pick souvenirs and handicrafts.
Espindo&apos;s Jaipur 1 day tour or two-day package guarantees a seamless journey, complete with air-conditioned transport, professional drivers, and guides who bring Jaipur’s stories to life. Book now for an adventure you’ll never forget!

</p>
</div>} />
<TravelSection travelData={travelData} tourDetails={tourDetails} trips={trips} iconName={iconName} highlights={highlights}  sightseeingIconName={sightseeingIconName} sIncluded={sIncluded} sExcluded={sExcluded}/>

<ProductSlider  items={items}/>
    </div>
  )
}

export default page

