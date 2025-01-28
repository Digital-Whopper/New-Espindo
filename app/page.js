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
  <>
<HeroSection/>

  {/* <Slider/> */}
  <ContentPopup
  headingcomp="Embark on Your Dream Journey with Espindo, Your Trusted Jaipur Travel Agent"
  
  fullContent={<div className="container mx-auto w-[90%] text-xs sm:text-sm">
    <p>Get ready to uncover the magic of Jaipur with Espindo, your ultimate Jaipur travel agent! Picture yourself strolling through the Pink City&apos;s vibrant streets, where royal palaces meet bustling bazaars, and every corner tells a story of grandeur and culture.
With Espindo, your adventure is more than just a trip it&apos;s an unforgettable experience. From the awe-inspiring forts to hidden treasures off the beaten path, we ensure you see it all. Craving a taste of royalty? Indulge in the mouthwatering Dal Bati Churma and other authentic Rajasthani delicacies that will leave you wanting more.
Whether you&apos;re marveling at famous landmarks or exploring <strong>tourist places near Jaipur Rajasthan,</strong>Espindo takes care of every detail to make your journey effortless and extraordinary. Trust us to turn your Jaipur dream into a reality filled with wonder, flavor, and unforgettable memories!.</p>
<h2 className="font-bold mt-4 sm:text-base text-sm">How to Reach Jaipur: Your Gateway to the Pink City</h2>
<p>Get ready to uncover the magic of Jaipur with Espindo, your ultimate Jaipur travel agent! Picture yourself strolling through the Pink City&apos;s vibrant streets, where royal palaces meet bustling bazaars, and every corner tells a story of grandeur and culture. With Espindo, your adventure is more than just a trip it&apos;s an unforgettable experience. From the awe-inspiring forts to hidden treasures off the beaten path, we ensure you see it all. Craving a taste of royalty? Indulge in the mouthwatering Dal Bati Churma and other authentic Rajasthani delicacies that will leave you wanting more. Whether you&apos;re marveling at famous landmarks or exploring tourist places near Jaipur Rajasthan, Espindo takes care of every detail to make your journey effortless and extraordinary. Trust us to turn your Jaipur dream into a reality filled with wonder, flavor, and unforgettable memories!.</p>
<p>Planning your trip to Jaipur? Reaching this vibrant city is as easy as it is exciting! Whether you&apos;re flying in or hitting the road, Espindo&apos;s Jaipur tour and travels services ensure your journey is smooth and memorable. Here&apos;s how you can get to Jaipur:</p>
<ul>
<li className="mt-2"> <h3 className="font-bold">1. By Flight:</h3> Touch down at Jaipur International Airport, your gateway to the royal city! With excellent connectivity to major cities across India, reaching Jaipur by air is a breeze. Upon arrival, take advantage of taxi services or hotel pickups for hassle-free transfers.
</li>
<li className="mt-2"> <h3 className="font-bold">2. By Train:</h3> Jaipur Junction, the heart of the city&apos;s railway network, welcomes travelers from across the country. Known for its convenience and efficiency, train travel offers a budget-friendly and comfortable way to explore the city.</li>
<li className="mt-2"> <h3 className="font-bold">3. By Car:</h3> Love a good road trip? Drive to Jaipur and enjoy scenic highways dotted with charming dhabas. This flexible option lets you explore nearby gems like Neemrana Fort and Sariska National Park. Perfect for those who want to combine their journey with a <strong>tour and travels in Jaipur</strong> experience.</li>
<li className="mt-2"> <h3 className="font-bold">4. By Bus:</h3>Affordable and reliable buses connect Jaipur to cities like Delhi and Agra. Opt for Volvo or sleeper buses for extra comfort, and enjoy a seamless journey with convenient drop-offs at Sindhi Camp, the city&apos;s main bus station. However you choose to arrive, Espindo is here to make your trip unforgettable. Let us handle the details while you immerse yourself in Jaipur&apos;s royal charm!</li>

</ul>
<h2 className="font-bold mt-4 sm:text-base text-sm">Discover the Best Season to Explore Jaipur&apos;s Timeless Charm</h2>
<p className="mt-2">Jaipur, the Pink City, is a treasure trove of history, culture, and breathtaking beauty waiting to be explored year-round. But which season is perfect for your journey? Espindo, your trusted <strong>Jaipur travel agent, </strong>has the answer!</p>
<ul>
<li className="mt-2"><h3 className="font-bold">1. Winter Wonderland (October to March):</h3>Cool breezes and golden sunshine make winter the ultimate season for adventure. Picture yourself wandering through majestic forts and royal palaces without breaking a sweat. Winter is also the perfect time to visit the <strong>top 10 tourist places in Jaipur,</strong> where every corner whispers tales of grandeur.</li>
<li className="mt-2"><h3 className="font-bold">2. Summer Escapes (April to June):</h3>Don&apos;t shy away from Jaipur&apos;s summer charm! With fewer crowds and unbeatable deals on <strong>Jaipur tour packages,</strong> it&apos;s an ideal time to explore iconic indoor marvels like Jantar Mantar and Albert Hall Museum. Plus, you get Jaipur&apos;s magic almost entirely to yourself!</li>
<li className="mt-2"><h3 className="font-bold">3. Monsoon Magic (July to September):</h3>When the rains kiss Jaipur, the city blooms with fresh beauty. Rain-washed forts, lush gardens like Sisodia Rani Garden, and the vibrant Teej festival make this season a dream for cultural and nature lovers alike. </li>
</ul>
<p className="mt-2">At Espindo, we craft unforgettable tours for your travel cravings. Whether you&apos;re chasing the winter winds, soaking in monsoon bliss, or seeking summer tranquility, our <strong>Jaipur tour packages</strong> guarantee a journey full of wonder and memories. Ready to make your trip extraordinary? Let&apos;s go!</p>
<h2 className="font-bold mt-4 sm:text-base text-sm">Adventure Awaits in Jaipur: Unmissable Thrills with Espindo</h2>
<p className="mt-2">Jaipur isn&apos;t just about royal forts and palaces it&apos;s a playground of exhilarating adventures waiting to awaken your inner explorer. With Espindo, your journey blends heart-pounding excitement and unforgettable memories, making it the ultimate <strong>Jaipur adventure tour.</strong></p>
<ul>
<li className="mt-2"><h3 className="font-bold">Dive Into the Wild Leopard Safari Adventures</h3> Embark on a thrilling journey at Jhalana Safari Park, home to majestic leopards, graceful deer, dazzling peacocks, and a kaleidoscope of bird species. Let expert guides lead the way for an unforgettable wildlife experience that showcases the best of <strong>adventure places in Jaipur.</strong></li>
<li className="mt-2"> <h3 className="font-bold">Rise Above the Royal Skyline Hot Air Balloon Bliss </h3>Take flight and float over Jaipur&apos;s stunning landscapes! Witness Amer Fort bathed in golden light during sunrise or sunset. It&apos;s a magical perspective you&apos;ll cherish forever.</li>
<li className="mt-2"><h3 className="font-bold">Ride Like Royalty Camel Journeys Through History</h3>Sway to the rhythm of the desert as you explore Amer Fort and Jal Mahal on a camel. This classic Jaipur adventure is steeped in charm and culture.
</li>
<li className="mt-2"><h3 className="font-bold">Conquer the Heights Trekking to Stunning Sunrises</h3>Lace up your boots and trek the scenic trails of Nahargarh Fort or Amer. Easy climbs, breathtaking views, and the serenity of dawn make these treks unforgettable.
</li>
<li className="mt-2"> <h3 className="font-bold">Pedal Through the Pink City Cycling Tours</h3>
Feel the pulse of Jaipur as you glide through bustling bazaars and vibrant streets. Cycling tours combine adventure with cultural immersion in the most delightful way.
At Espindo, we ensure every adventure is seamless and unforgettable. From booking safaris and hot air balloon rides to guiding you through every experience, we&apos;ve got you covered. Pro tips: dress comfortably, stay hydrated, and let the thrill take over!
Your Jaipur journey deserves more than sightseeing  it&apos;s time to add a dash of adventure and create memories that will last a lifetime. With Espindo, your <strong>Jaipur adventure tour</strong> becomes a dream turned reality!
</li>

</ul>
<p className="mt-2">Espindo ensures a seamless experience for all these adventures. Book safaris and hot air balloon rides in advance for added convenience and safety. Wear comfortable clothes, stay hydrated, and follow guides to make the most of these activities. These adventures will add excitement to your trip and create unforgettable memories.
</p>

<ul>
<h2 className="font-bold mt-4 sm:text-base text-sm">Jaipur&apos;s Must-Visit Gems: Unveiling the Magic of the Pink City</h2>
<p className="font-bold mt-4 sm:text-base text-sm">Discover the best of Jaipur with Espindo, your trusted <strong>tour agency in Jaipur,</strong> as we take you on an unforgettable journey through these iconic attractions:</p>
 
  <li className="mt-2"><h3 className="font-bold">City Palace: Where Royals Once Lived</h3>Immerse yourself in the grandeur of Rajput architecture and experience the royal essence of Jaipur.</li>
  <li className="mt-2"><h3 className="font-bold">Amber Fort: Step Into a World of Majesty</h3> A UNESCO World Heritage site, Amer Fort dazzles with its Sheesh Mahal and spellbinding light-and-sound shows.
  </li>
  <li className="mt-2"><h3 className="font-bold"> Hawa Mahal: The Crown Jewel of Jaipur</h3> Admire the architectural brilliance and cool breeze of this iconic palace, a must-see landmark.
  </li>
  <li className="mt-2"><h3 className="font-bold">Jantar Mantar: Science Meets Wonder</h3> Marvel at this astronomical treasure, a UNESCO World Heritage site that blends innovation with stunning architecture.
  </li>
  <li className="mt-2"><h3 className="font-bold">Jal Mahal: Floating Beauty in Jaipur&apos;s Waters</h3> This dreamy palace surrounded by shimmering water is an unmissable highlight of your Jaipur night tour.</li>
  <li className="mt-2"><h3 className="font-bold">Albert Hall Museum: A Journey Through Time</h3> Dive into Rajasthan&apos;s history at its first art museum, home to extraordinary artifacts and stories.</li>
  <li className="mt-2"><h3 className="font-bold">Nahargarh Fort: Views That Take Your Breath Away
</h3> Perched atop the Aravallis, this fort offers sweeping vistas and a serene retreat from the city below.</li>
  <li className="mt-2"><h3 className="font-bold">World Trade Park: Shop, Dine, and Shine!</h3>Step into Jaipur&apos;s modern marvel for a luxurious shopping spree and entertainment galore. A must-visit on your Jaipur day tour!
  </li>
  <li className="mt-2"><h3 className="font-bold">City Palace: Where Royals Once Lived</h3> Immerse yourself in the grandeur of Rajput architecture and experience the royal essence of Jaipur.
  </li>
  <li className="mt-2"><h3 className="font-bold"> City Park: Tranquility in the Heart of Jaipur</h3> Relax, unwind, and enjoy a peaceful retreat amidst Jaipur&quot;s bustling vibe.</li>
</ul>
<p className="font-bold mt-4 sm:text-base text-sm">Whether you&apos;re exploring on a Jaipur one day tour or a longer escapade, Espindo ensures your journey is packed with unforgettable moments and hidden treasures!</p>
<h2 className="font-bold mt-4 sm:text-base text-sm">Where to Shop in Jaipur - Jaipur&apos;s Shopping Wonderland </h2>
<p className="mt-2">Step into the colorful bazaars of Jaipur, where each corner bursts into colors, cultures, and crafts. Nicknamed as the Gemstone Capital of India, the Pink City is an eldorado for shopaholics and collectors. Let Espindo upgrade your Jaipur shopping tour with the best experiences this city has in store for you.
</p>
<ul>
  <li className="mt-2"><h3 className="font-bold">Johari Bazaar A Gemstone Lover&apos;s Paradise</h3> Find the most exquisite gemstone jewelry that epitomizes the legacy of Jaipur. This is the ultimate marketplace for precious stones and traditional designs.
  </li>
  <li className="mt-2"><h3 className="font-bold">Bapu Bazaar The Heart of Rajasthani Textiles</h3>Experience a kaleidoscope of Bandhani and Leheriya sarees, perfect to add a dash of tradition to your wardrobe.
  </li>
  <li className="mt-2"><h3 className="font-bold">Blue Pottery Jaipur&apos;s Unique Craft</h3> Adorn your homes with beautiful blue pottery from Kripal Kumbh or the shops near Amer Fort, which remains an iconic art of Jaipur.
  </li>
  <li className="mt-2"><h3 className="font-bold">Mojaris Iconic Handcrafted Shoes</h3> Slip into authentic Rajasthani mojaris from Tripolia Bazaar and Nehru Bazaar. These beautifully crafted shoes are as stylish as they are comfortable.
  </li>
  <li className="mt-2"><h3 className="font-bold">Chandpole Bazaar Handicrafts and More</h3> Explore a treasure trove of jewelry boxes, wooden carvings, and other handicrafts for authentic Jaipur souvenirs.
  </li>
  <li className="mt-2"><h3 className="font-bold">Mirza Ismail Road Aromas of Spices and Dry Fruits </h3>Stock up on aromatic spices and premium dry fruits to take home a piece of Jaipur&apos;s culinary charm.
  </li>
</ul>
<h3 className="font-bold mt-2">Shopping Tips for Jaipur&apos;s Bazaars </h3> 

<ul>
  <li className="mt-2">1. Bargain like a pro  it&apos;s part of the shopping experience</li>
  <li className="mt-2">2. Carry cash for small purchases in local markets.</li>
  <li className="mt-2">3. Trust Espindo&apos;s expert guidance for insider tips on<strong> Jaipur shopping hotspots</strong> and hidden gems.</li>
</ul>

<p className="m-0">Espindo ensures your <strong>Jaipur shopping tour</strong> is as seamless as it is unforgettable. Dive into the city&apos;s cultural treasures and shop your heart out! </p>
</div>}/>

<Tour/>



<HeadingComponent 
italic="Discover:"
heading="The Jaipur With Our Exclusive Tour"
para="Join us on a breathtaking journey through some of the most amazing destinations."/>

<VideoSlider/>
<HeadingComponent heading="Our Safari Places"
para="Exploring New Horizons Together"
italic="Visit:"
/>

<ProductSlider items={items} />

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
