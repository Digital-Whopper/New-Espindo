import React from 'react'
import SafariSection from "../component/SafariSection";
import TravelSection from '../component/TravelSection';
import ProductSlider from '../component/ProductSlider';

import ContentPopup from '../component/ContentPopup';
const page = () => {
    const travelData = [
        {
          id: 1,
          title: "Hawa-Mahal",
          imgUrl: "/images/product1.jpg",
          description: "Hawa Mahal, also known as the Palace of Winds, is an iconic architectural marvel located in Jaipur, Rajasthan",
          text:"India. Built in 1799 by Maharaja Sawai Pratap Singh, the structure is a fine example of Rajput architecture infused with Mughal influences. The Hawa Mahal is celebrated for its intricate design and cultural significance."
        },
        {
            id: 2,
            title: "City Palace",
            imgUrl: "/images/product2.jpg",
            description: "City Palace in Jaipur is a magnificent royal complex that stands as a testament to Rajasthan&apos;s rich history",
            text:"culture, and architectural grandeur. Located in the heart of Jaipur, this iconic landmark was built by Maharaja Sawai Jai Singh II in 1727 and served as the seat of the royal family of Jaipur."
          },
          {
            id: 3,
            title: "Jantar Mantar",
            imgUrl: "/images/product3.jpg",
            description: "City Palace in Jaipur is a magnificent royal complex that stands as a testament to Rajasthan&apos;s rich history, culture, and architectural grandeur. Located in the heart of Jaipur",
            text:"this iconic landmark was built by Maharaja Sawai Jai Singh II in 1727 and served as the seat of the royal family of Jaipur."
          },
      ];
    
    

      const items = [
        {
          id: 1,
          imageSrc: "/images/LEOPARD.webp",
          title: "Jhalana Leopard-Safari",
     
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
      backgroundImage="/images/1day-d.webp"
      mobileImage="/images/1daytour-m.webp"  
     
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

<TravelSection travelData={travelData} readMoreContent={travelData} />

<ProductSlider  items={items}/>
    </div>
  )
}

export default page