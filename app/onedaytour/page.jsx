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
  name:"Live guide: Hindi, German, Japanese, English, Italian, French, Spanish"
},

  ];

  const highlights=[
    {
      id:1,
      para:"An action-packed private tour of Jaipur's top attractions"
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
            paraone: "One of Jaipur's most iconic landmarks, the Hawa Mahal or Palace of Winds is a stunning architectural masterpiece from the 18th century. Designed by Ustad Lal Chand, this magnificent structure is made with pink and red sandstone to blend in with the Pink City's color scheme. Its intricate design and grandeur make it a must-visit for tourists in Jaipur.",
            
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
            paraone: "Another must-visit monument in Jaipur is the Royal Gaitor, a resting place for past rulers. This site features several Chhatris, or cenotaphs, dedicated to the Maharajas. It's a beautiful and historic spot that should not be missed on your trip to Jaipur."
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
        title:"What's included",
        lineone:"All Sightseeing & Transfers by Private A/C Car.",
        linetwo:"Private transportation with friendly driver.",
        linethree:"Fuel (Petrol/Diesel/Gasoline), Parking Charges, and all taxes.",
        linefour:"Professional Tour Guide ( Available with Tour Options )",
        linefive:"Bottled water",
      },
      {
        id:2,
        title:"What's not included",
        lineone:"Monuments Entrance Fees / Camera Fees",
        linetwo:"Meals & Other Expenses",
        linethree:"Air /Train / Bus Fare",
        linefour:"Driver&apos;s and Guide's Tips",
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
        desc:"Learn about the history of Jaipur, a royal capital founded in 1727. Get a look at the city&apos;s trademark downtown and discover how it came to be painted pink. Visit Hawa Mahal, or Palace of Winds, with its beehive-shaped facade—once a purdah screen for Rajput women. See Jantar Mantar, a centuries-old astronomical observatory, and the City Palace, home to Rajasthan's royal family, before drop-off to your hotel after a full day of sightseeing.."
      },
{
  id:3,
  title:"Help",
  desc:"If you have questions about this tour or need help making your booking, we&apos;d be happy to help. Just call the number below and reference the product code: 4"
},
{
  id:4,
  title:"Note:",
  desc:"This itinerary is customizable based on your preferences and time constraints. Please wear comfortable clothing and footwear suitable for walking and exploring historical sites.Don't forget to carry sunscreen, sunglasses, and a hat to protect yourself from the sun."
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
      backgroundImage="/1day-d.webp"
      mobileImage="/1daytour-m.webp"  
     
      />
        <ContentPopup  
          headingcomp="Tailored Tours by Espindo: Jaipur One-Day Tour Package"
          fullContent={<div className="container mx-auto w-[90%] text-xs sm:text-sm">
            <p className="mt-2">Jaipur, popular as the Pink City, exudes a captivating cultural aura. If you have only a day to explore the city, there&apos;s no need to worry. Our travel agency offers meticulously curated tours tailored for a one-day trip in Jaipur.
Our specially designed Jaipur one-day tour package is ideal for travelers seeking a fulfilling experience in a limited timeframe. Start your day with a visit to the magnificent Amer Fort, located atop a hill.
This UNESCO World Heritage Site provides a glimpse into the royal Rajputana architecture. The Sheesh Mahal is a must-see, especially in the morning light. You can opt for an elephant ride for a touch of royal grandeur.
Espindo&apos;s Jaipur one-day tour package by car ensures hassle-free travel and unmatched comfort. Enjoy the convenience of air-conditioned transport, essential in Jaipur&apos;s warm climate.
This is the perfect opportunity to immerse yourself in the city&apos;s unique atmosphere. With the support of professional drivers and experienced guides, you can make the most of your day. Explore Jaipur&apos;s artistry by shopping for gemstones and vibrant textiles during your one-day tour.
Visit Hawa Mahal, an architectural marvel built for royal women to observe city life while maintaining privacy. Head to a traditional Rajasthani restaurant and savor authentic dishes like Dal Baati Churma and Gatte ki Sabzi for lunch.
Continue to the City Palace, which encapsulates Jaipur&apos;s royal heritage. Here, explore museums showcasing artifacts and textiles. Don&apos;t miss Jantar Mantar, another UNESCO World Heritage Site and a remarkable astronomical observatory.
Conclude your day at Nahargarh Fort, where you can watch a mesmerizing sunset overlooking the entire city of Jaipur.
</p>



</div>} />

<TravelSection travelData={travelData} tourDetails={tourDetails} trips={trips} iconName={iconName} highlights={highlights}  sightseeingIconName={sightseeingIconName} sIncluded={sIncluded} sExcluded={sExcluded}/>

<ProductSlider  items={items}/>
    </div>
  )
}

export default page