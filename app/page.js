'use client';
import React from 'react';
// import Slider from './component/Slider'
import HeadingComponent from './component/HeadingComponent'
import VideoSlider from './component/VideoSlider'
import ReviewSlider from './component/ReviewSlider'
import FAQSection from './component/FAQSection'
import ProductSlider from './component/ProductSlider'
import Blog from './component/Blog'
import CubeSlider from './component/CubeSlider'
import Tour from './component/Tour'
import ContentPopup from './component/ContentPopup'
import HeroSection from './component/HeroSection';





export default function Home() {

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
    // camel-safari.webp
    {
      id: 2,
      imageSrc: "/Camel.jpg",
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
  <>
<HeroSection/>

  {/* <Slider/> */}
  <ContentPopup
  headingcomp="How to Reach Jaipur?"
  
  fullContent={<div className="container mx-auto w-[90%] text-xs sm:text-sm">

<p>It&apos;s easy to reach Jaipur as the city is well-connected. Here are the best options to reach the Pink City:</p>
<ul>
<li className="mt-2"> <h3 className="font-bold">1. By Flight:</h3> Jaipur has its airport, Jaipur International Airport, connected to all major cities in India. Various taxi and cab services are available upon landing, and many hotels provide airport pickup services.</li>
<li className="mt-2"> <h3 className="font-bold">2. By Train: </h3> Jaipur is a key point in the Indian railway network, with a major station called Jaipur Junction, which is centrally located for traveler convenience. Trains are a fast and comfortable means of transport. For budget-friendly travel, consider normal trains instead of premium options like MERS.</li>
<li className="mt-2"> <h3 className="font-bold">3. By Car:  </h3>A road trip to Jaipur is a flexible and enjoyable option. Take highway routes featuring dhabas, where you can stop to enjoy local food. Driving allows you to explore nearby attractions like Neemrana Fort and Sariska National Park. You can also conveniently enjoy a Jaipur shopping tour by car.</li>
<li className="mt-2"> <h3 className="font-bold">4. By Bus:   </h3>A road trip to Jaipur is a flexible and enjoyable option. Take highway routes featuring dhabas, where you can stop to enjoy local food. Driving allows you to explore nearby attractions like Neemrana Fort and Sariska National Park. You can also conveniently enjoy a Jaipur shopping tour by car.</li>

</ul>
<h2 className="font-bold mt-4 sm:text-base text-sm">Which Is the Perfect Season for Your Trip?</h2>
<p className="mt-2">Each season offers a unique experience in Jaipur. Weather plays a crucial role in planning a memorable trip.</p>
<ul>
<li className="mt-2"> <h3 className="font-bold">1. Winter (October to March):</h3>Winter is the best time to visit Jaipur, with cool and pleasant weather that is perfect for outdoor activities and sightseeing. This is the ideal season to explore Jaipur&apos;s forts and palaces. Espindo recommends visiting during this time for the best experiences.</li>
<li className="mt-2"><h3 className="font-bold">2. Summer (April to June): </h3> Summers in Jaipur are hot but great for those who prefer fewer crowds. This season offers excellent deals on tours and accommodations. Explore indoor attractions like Jantar Mantar and Albert Hall Museum.</li>
<li className="mt-2"><h3 className="font-bold">3. Monsoon (July to September):</h3>Monsoon breathes new life into Jaipur. It&apos;s the perfect time to enjoy rain-washed forts and gardens like Sisodia Rani Garden. The Teej festival during this season adds a cultural touch to your trip.</li>
</ul>
<p className="mt-2">Espindo offers affordable tour packages for every season, including one-day and two-day options tailored to your preferences.</p>
<h2 className="font-bold mt-4 sm:text-base text-sm">Adventure Calls: Must-Try Activities in Jaipur</h2>
<p className="mt-2">Jaipur is more than just forts and palaces; it offers thrilling adventures for everyone.</p>
<ul>
<li className="mt-2"><h3 className="font-bold">1. Safari:</h3>Enjoy a Leopard Safari at Jhalana Safari Park, home to royal leopards, deer, peacocks, and various bird species. Expert guides ensure a safe and exciting experience.</li>
<li className="mt-2"> <h3 className="font-bold">2. Hot Air Balloon Ride:</h3>Hot air balloon rides over Jaipur offer breathtaking views of Amer Fort and the city. Sunrise and sunset rides are particularly spectacular.</li>
<li className="mt-2"><h3 className="font-bold">3. Camel Ride: </h3>Explore landmarks like Amer Fort and Jal Mahal with a camel ride, a quintessential Jaipur experience.</li>
<li className="mt-2"><h3 className="font-bold">4. Trekking:  </h3>If you love nature, try trekking at Nahargarh Fort or Amer. The treks are relatively easy, and the views, especially during sunrise, are stunning.</li>
<li className="mt-2"> <h3 className="font-bold">5. Cycling:</h3>  Cycling tours are a great way to explore Jaipur&apos;s bustling streets and shop conveniently.</li>

</ul>
<p className="mt-2">Espindo ensures a seamless experience for all these adventures. Book safaris and hot air balloon rides in advance for added convenience and safety. Wear comfortable clothes, stay hydrated, and follow guides to make the most of these activities.
These adventures will add excitement to your trip and create unforgettable memories.
</p>
<h2 className="font-bold mt-4 sm:text-base text-sm">Jaipur&apos;s Must-Visit Gems </h2>
<ul>
  
 
  <li className="mt-2"><h3 className="font-bold">City Palace:</h3> Renowned for its Rajput architecture, City Palace reflects the royal essence of Jaipur.</li>
  <li className="mt-2"><h3 className="font-bold">Amber Fort:</h3> Amer Fort, a UNESCO World Heritage site, includes the Sheesh Mahal within its complex. Its famous light-and-sound show features lights turning on and off at various intervals.</li>
  <li className="mt-2"><h3 className="font-bold">Hawa Mahal:</h3> Known for its unique architecture and excellent ventilation, Hawa Mahal is an iconic landmark.</li>
  <li className="mt-2"><h3 className="font-bold">Jantar Mantar:</h3> Also a UNESCO World Heritage site, Jantar Mantar features instruments used to measure time and boasts impressive architecture.</li>
  <li className="mt-2"><h3 className="font-bold">Jal Mahal:</h3> While it lacks personal chambers, Jal Mahal&apos;s unique design and surrounding water create a breathtaking view.</li>
  <li className="mt-2"><h3 className="font-bold">Albert Hall Museum:</h3> Rajasthan&apos;s first art museum, the Albert Hall Museum, houses an exceptional collection.</li>
  <li className="mt-2"><h3 className="font-bold">Nahargarh Fort: </h3> Located on the majestic Aravalli Hills, Nahargarh Fort serves as a retreat destination. </li>
  <li className="mt-2"><h3 className="font-bold">World Trade Park (WTP):</h3> WTP is Jaipur&apos;s modern shopping and entertainment destination. Consider including it in your Jaipur shopping tour.</li>
  <li className="mt-2"><h3 className="font-bold">GT Mall:</h3> For a mix of local and modern shopping, visit GT Mall. Popular among tourists, it offers a variety of stores.</li>
  <li className="mt-2"><h3 className="font-bold">City Park:</h3> Ideal for relaxing evenings and picnics, this tranquil spot provides a peaceful retreat in the bustling city.</li>
</ul>
<h2 className="font-bold mt-4 sm:text-base text-sm">Jaipur&apos;s Shopping Delights </h2>
<p className="mt-2">Shopping in Jaipur is an exciting blend of tradition and modernity, showcasing the city&apos;s rich craftsmanship and gems. Known as the &quot;Gemstone Capital of India,&quot; Jaipur offers exquisite gemstone jewelry.</p>
<ul>
  <li className="mt-2"><h3 className="font-bold">Johari Bazaar:</h3> Ideal for purchasing precious stones.</li>
  <li className="mt-2"><h3 className="font-bold">Bapu Bazaar:</h3> Perfect for Bandhani and Leheriya sarees.</li>
  <li className="mt-2"><h3 className="font-bold">Blue Pottery:</h3> This unique Jaipur craft is available at Kripal Kumbh and local shops near Amer Fort.</li>
  <li className="mt-2"><h3 className="font-bold">Mojaris (Handcrafted Shoes):</h3> Visit Tripolia Bazaar and Nehru Bazaar to try these iconic shoes.</li>
  <li className="mt-2"><h3 className="font-bold">Jewelry Boxes and Handicrafts:</h3> Explore Chandpole Bazaar for authentic finds.</li>
  <li className="mt-2"><h3 className="font-bold">Aromatic Spices and Dry Fruits:</h3> Shop at Mirza Ismail Road.</li>
</ul>
<h3 className="font-bold mt-2">Shopping Tips:</h3> <p className="m-0">Bargain in local markets and carry cash for small purchases. Listen to travel agents for advice on the best markets.</p>
</div>}/>

<Tour/>


<HeadingComponent heading="Our Safari Places"
para="Exploring New Horizons Together"
italic="Visit:"
/>

<ProductSlider items={items} />
<HeadingComponent 
italic="Discover:"
heading="The Jaipur With Our Exclusive Tour"
para="Join us on a breathtaking journey through some of the most amazing destinations."/>

<VideoSlider/>


<CubeSlider/>

<HeadingComponent heading="Our Blogs"
para="Explore informative articles that inspire, educate, and keep you in the know."
/>
<Blog/>

<HeadingComponent italic="Trusted by:" heading="Our Happy Clients"
para="Our commitment to excellence is reflected in the satisfaction of those we serve."
/>
<ReviewSlider/>
<HeadingComponent heading="Frequently Asked Questions"/>
<FAQSection/>


</>
  
  );
}
