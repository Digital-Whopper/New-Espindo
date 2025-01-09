// components/FAQSection.js

"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is the best time to visit Jaipur?",
    answer:
      "The best time to visit Jaipur is from October to March when the weather is cooler and more pleasant for sightseeing. The summer months (April to June) can be extremely hot, with temperatures often reaching above 40°C (104°F).",
  },
  {
    question: "How many days should I spend in Jaipur?",
    answer: "A 2 to 3-day trip is ideal to explore the main attractions of Jaipur. This allows time to visit major forts, palaces, markets, and experience local culture.",
  },
  {
    question: "Is Jaipur safe for tourists?",
    answer:
      "Jaipur is generally a safe city for tourists. However, like any other tourist destination, it’s advisable to take basic precautions, such as being cautious with your belongings and avoiding isolated areas at night.",
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
