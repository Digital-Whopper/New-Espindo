'use client';

import React from 'react'
import SafariSection from "../component/SafariSection";
import TravelSection from '../component/TravelSection';
import ProductSlider from '../component/ProductSlider';
import ContentPopup from '../component/ContentPopup';
const page = () => {

  const travelData = [
    {
      id: 1,
      title: "Amber-Fort",
      imgUrl: "/product4.jpg",
      description: `City Palace in Jaipur is a magnificent royal complex that stands as a testament to Rajasthan&apos;s rich history, culture, and architectural grandeur. Located in the heart of Jaipur`,
      text:"this iconic landmark was built by Maharaja Sawai Jai Singh II in 1727 and served as the seat of the royal family of Jaipur."
    },
   
    {
        id: 2,
        title: "Monkey Temple",
        imgUrl: "/product5.jpg",
        description: `City Palace in Jaipur is a magnificent royal complex that stands as a testament to Rajasthan&apos;s rich history`,
        text:"culture, and architectural grandeur. Located in the heart of Jaipur, this iconic landmark was built by Maharaja Sawai Jai Singh II in 1727 and served as the seat of the royal family of Jaipur."
      },
      {
        id: 3,
        title: "Panna Meena ka Kund",
        imgUrl: "/product6.jpg",
        description: `City Palace in Jaipur is a magnificent royal complex that stands as a testament to Rajasthan&apos;s rich history, culture, and architectural grandeur. Located in the heart of Jaipur`,
        text:"this iconic landmark was built by Maharaja Sawai Jai Singh II in 1727 and served as the seat of the royal family of Jaipur."
      },
      {
        id: 4,
        title: "Jagat Shiromani Ji Temple",
        imgUrl: "/product7.jpg",
        description: `Hawa Mahal, also known as the Palace of Winds, is an iconic architectural marvel located in Jaipur, Rajasthan`,
        text:"India. Built in 1799 by Maharaja Sawai Pratap Singh, the structure is a fine example of Rajput architecture infused with Mughal influences. The Hawa Mahal is celebrated for its intricate design and cultural significance."
      },
     
  ];

      const items = [
        {
          id: 1,
          imageSrc: "/LEOPARD.webp",
          title: "Jhalana Leopard-Safari",
     
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
         
          badge: "5D Sambhar Lake",
          price: "INR 45,000",
          originalPrice: "INR 75,000",
          alt: "Jal Mahal Tour",
          link: "/tour"
        },
      
      ];
  return (
    <div>

<SafariSection    
     backgroundImage="/2day-d.webp"
     mobileImage="/2daytour-m.webp" 
     
      />
     <ContentPopup  headingcomp="Jaipur Tour Package for Two Days"
          fullContent={<div className="container mx-auto w-[90%] text-xs sm:text-sm">
            <p className="mt-2">Designed with your comfort in mind, our two-day tour ensures a relaxed pace, premium transportation, and personalized attention for families and travelers seeking convenience.
Espindo&apos;s Jaipur tour package for families offers a seamless experience with well-maintained vehicles and thoughtful itineraries.
This two-day tour package is perfect for capturing the essence of Jaipur&apos;s history and culture. Polite drivers and knowledgeable guides ensure a smooth and enjoyable journey, while the flexible route allows customization to suit your preferences. Ample breaks for refreshments and exploration add to the comfort, letting you fully embrace Jaipur&apos;s beauty.
On the first day, begin your adventure with a smooth ride to Amer Fort in an air-conditioned car. Our professional drivers ensure a stress-free trip, allowing you to appreciate the scenic beauty of the Aravalli Hills.
Explore the fort&apos;s royal courtyards and Sheesh Mahal while your guide shares fascinating tales of its history. Next, stop at the serene Jal Mahal, which is perfect for capturing photos of this enchanting palace floating on Man Sagar Lake.
The journey continues with a visit to the City Palace, where you&apos;ll experience royal grandeur in its museums and courtyards. Jantar Mantar, an ancient observatory located nearby, is another highlight. Our guides help you understand its intriguing astronomical instruments.
End your day at Nahargarh Fort, where you can enjoy a peaceful evening and a breathtaking sunset overlooking the city.
On the second day, start with a relaxing stroll through City Park, a tranquil retreat perfect for unwinding. Your private car then takes you to World Trade Park, where you can shop, dine, or enjoy Jaipur&apos;s modern vibe.
Afterward, visit the Albert Hall Museum to delve into Rajasthan&apos;s rich history and art. Our tour package ensures you have enough time to enjoy each attraction without feeling rushed.
Conclude your trip at GT Mall, where you can shop for traditional handicrafts and souvenirs, leaving you with lasting memories of Jaipur. 

</p>



</div>} />
<TravelSection travelData={travelData} readMoreContent={travelData} />

<ProductSlider  items={items}/>
    </div>
  )
}

export default page