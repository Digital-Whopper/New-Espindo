// components/FAQSection.js

"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework that enables functionality such as server-side rendering and static site generation, helping to optimize performance and SEO.",
  },
  {
    question: "How do I create a new Next.js project?",
    answer:
      "To create a new Next.js project, you can run `npx create-next-app my-app` or `yarn create next-app my-app` in your terminal.",
  },
  {
    question: "What is the difference between static and server-side rendering?",
    answer:
      "Static rendering generates HTML at build time, while server-side rendering generates HTML on each request, providing fresh content for every visit.",
  },
  {
    question: "What are API routes in Next.js?",
    answer:
      "API routes allow you to create backend endpoints within your Next.js app, enabling server-side logic without needing a separate backend server.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close FAQ
  };

  return (
    <div className="w-full max-w-4xl my-10 mx-auto  px-4">
     
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 px-6 flex justify-between items-center  font-medium text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none"
            >
             <span className="sm:text-base lg:text-lg ">{faq.question}</span>

              <span
                className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              >
                + {/* Triangle icon for toggle */}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
