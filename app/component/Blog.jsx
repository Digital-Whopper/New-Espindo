import React from 'react'
import Image from "next/image";

export default function Blog() {
  
    const blogs = [
      {
        id: 1,
        title: "Jaipur in Winter",
        excerpt: "A Majestic Escape Under the Golden Sun Winter is undoubtedly one of the best times to explore the royal city of Jaipur. With its pleasant weather, vibrant festivals, and enchanting landmarks, Jaipur offers a magical experience thats perfect for every traveler. Lets dive into what makes Jaipur in winter a dream destination.",
        image: "/images/el-safari.jpg",
        slug: "learn-nextjs-fast",
      },
      {
        id: 2,
        title: "Pleasant Weather",
        excerpt: "The Perfect Backdrop for Exploration As the winter months roll in, Jaipur experiences cool mornings and sunny afternoons, creating the perfect conditions for outdoor sightseeing. Imagine sipping on a steaming cup of chai at the iconic Sahu Chai Wala while basking in the warmth of the golden sun. Winters crisp air makes wandering through the bustling streets and magnificent forts an absolute pleasure.",
        image: "/images/nahargarh2.jpg",
        slug: "clean-javascript-tips",
      },
      {
        id: 3,
        title: "Must-Visit Attractions in Winter",
        excerpt: "Jaipurs markets, such as Johari Bazaar and Bapu Bazaar, are a shoppers paradise during winter. Pick up intricate jewelry, traditional textiles, and handcrafted souvenirs. Dont forget to savor Rajasthani delicacies like dal bati churma, gatte ki sabzi, and ghevar.",
        image: "/images/wtp.jpg",
        slug: "tailwind-css-game-changer",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-100 back-ground-class">
        <div className="w-full sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-4/5 mx-auto px-4">
      
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="h-[450px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                width={600}
                height={400}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full  object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                  {/* <a
                    href={`/blog/${blog.slug}`}
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Read more →
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  