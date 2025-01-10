"use client";

import { useState } from "react";

const videos = [
  {
    id: 1,
    src: "/Video_3.mp4",

    type: "mp4", 
  },
  {
    id: 2,
    src: "/video2.mp4",

    type: "mp4",
  },
  {
    id: 3,
    src: "/video3.mp4",
   
    type: "mp4",
  },  {
    id: 4,
    src: "/Amer_Fort.mp4",

    type: "mp4", 
  },
];

export default function VideoSlider() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  // Function to open a video
  const openVideo = (video) => {
    setCurrentVideo(video);
    setIsVideoOpen(true);
  };

  // Function to close the video
  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="video-slider w-1500px sm:w-[100%] md:w-[100%] lg:w-[100%]">
      
      {/* Fullscreen Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999]">
          <div className="relative  max-w-4xl h-[90%]">
            {currentVideo.type === "youtube" ? (
              <iframe
                className="w-full h-full"
                src={`${currentVideo.src}?autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
               
              ></iframe>
            ) : (
              <video
                className="w-full h-full"
                src={currentVideo.src}
                controls
                autoPlay
                
              ></video>
            )}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 bg-white text-black w-[36px] h-[36px] rounded-full flex items-center justify-center focus:outline-none"
              aria-label="Close video"
            >
              x
            </button>
          </div>
        </div>
      )}

      {/* Video Grid (Silent Slider) */}
      {!isVideoOpen && (

        <div className="vids overflow-x-auto scrolling-touch">
           <div className="silent-slider flex gap-4 p-4 whitespace-nowrap">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative cursor-pointer w-full sm:w-[50%] md:w-[50%] lg:w-[24%] flex flex-none"
              onClick={() => openVideo(video)}
            >
              {video.type === "youtube" ? (
                <iframe
                  className="w-full aspect-video"
                  src={`${video.src}?mute=1&autoplay=1&loop=1&playlist=pdWXlWr4zl4`} // Add playlist for looping YouTube video
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  title={video.title}
                ></iframe>
              ) : (
                <video
                  className="w-full aspect-video object-cover h-[70vh]"
                  src={video.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                ></video>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-sm">
                {video.title}
              </div>
            </div>
          ))}
        </div>
        </div>
       
      )}
    </div>
  );
}


// "use client";

// import { useState } from "react";

// const videos = [
//   {
//     id: 1,
//     src: "https://cdn.shopify.com/s/files/1/0589/4733/8371/files/whatmore_tn_56ea2c6c-87fd-4edf-bd8a-8df5a7bc47df.mp4?v=1729075328",
//     title: "Click Here",
//   },
//   {
//     id: 2,
//     src: "https://youtube.com/shorts/IHa0uoVjfOE?si=2QGVoaQS0N0evs-_", // Replace with actual video URL
//     title: "Sample Video",
//   },
//   {
//     id: 3,
//     src: "https://cdn.shopify.com/s/files/1/0589/4733/8371/files/another-video.mp4?v=987654321", // Replace with actual video URL
//     title: "Another Video",
//   },
// ];

// export default function VideoSlider() {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState(videos[0]);

//   // Function to handle opening a video
//   const openVideo = (video) => {
//     setCurrentVideo(video);
//     setIsVideoOpen(true);
//   };

//   // Function to handle closing the video
//   const closeVideo = () => {
//     setIsVideoOpen(false);
//   };

//   return (
//     <div className="video-slider overflow-scroll">
//       {/* Fullscreen Video Modal */}
//       {isVideoOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999]">
//           <div className="relative w-full max-w-4xl h-[90%]">
//             <video
//               className="w-full h-full"
//               src={currentVideo.src}
//               controls
//               autoPlay
//               title={currentVideo.title}
//             />
//             <button
//               onClick={closeVideo}
//               className="absolute top-4 right-4 bg-white text-black w-[36px] h-[36px] rounded-full flex items-center justify-center"
//             >
//               x
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Video Grid (Silent Slider) */}
//       {!isVideoOpen && (
//         <div className="silent-slider flex gap-4 p-4 w-[1500px]">
//           {videos.map((video) => (
//             <div
//               key={video.id}
//               className="relative cursor-pointer w-[100%] lg:w-[33%]"
//               onClick={() => openVideo(video)} // Open video on div click
//             >
//               <video
//                 className="w-full "
//                 src={video.src}
//                 muted
//                 loop
//                 autoPlay
//                 playsInline
//                 title={video.title}
//               />
//               <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-sm">
//                 {video.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
