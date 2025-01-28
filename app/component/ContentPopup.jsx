'use client';
import React, { useState } from 'react';

const ContentPopup = ({ fullContent, headingcomp }) => {
  const [showPopup, setShowPopup] = useState(false);

 // Utility function to extract plain text from JSX
 const extractFirstParagraph = (jsx) => {
    if (Array.isArray(jsx)) {
      for (let element of jsx) {
        const result = extractFirstParagraph(element); // Recursively check for <p> tags
        if (result) return result;
      }
    }
    if (jsx && jsx.type === 'p') {
      return jsx.props.children; // Return the content of the first <p> tag
    }
    if (jsx && jsx.props && jsx.props.children) {
      return extractFirstParagraph(jsx.props.children); // Recursively look inside children
    }
    return null; // Fallback
  };
// Extract text content from the JSX
const firstParagraphContent = extractFirstParagraph(fullContent);


  // Truncated content (first 100 characters + "...")
  const truncatedContent =
  typeof firstParagraphContent === 'string' ? `${firstParagraphContent.slice(0, 100)}... `: '';

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="p-4 text-center bg-[#eee] mt-4">
      <h1 className='text-xl font-bold'>{headingcomp}</h1>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          {truncatedContent}{' '}
          <button
            onClick={togglePopup}
            className="text-blue-500 underline hover:text-blue-700"
          >
            Read More
          </button>
        </p>
      </div>

      {showPopup && (
        <>
          {/* Transparent Background */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

          {/* Popup Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4 mx-auto">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative max-h-[80vh] overflow-y-auto scrollbar-none">
              {/* Close Button */}
              <button
                onClick={togglePopup}
                className="sticky top-2 left-[100%] text-gray-500 hover:text-gray-700 text-3xl"
              >
                &times;
              </button>

              
               {/* Scrollable Content */}
              <div className="overflow-y-auto  pr-4 scrollbar-none">
                <div className="text-gray-800 text-sm md:text-base text-justify">
                   {fullContent}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContentPopup;