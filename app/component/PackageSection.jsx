import Link from "next/link";

// pages/index.js
const PackageSection = () => {
    return (
      <section className="max-w-full mt-[2%] mb-[2%]">
        <div className="w-[100%] flex  flex-wrap justify-evenly">
          {/* Card 1 */}
          <div
            className=" bg-cover pt-[20%] pb-[20%] bg-center  lg:w-[48%] w-[96%] mb-[2%] lg:mb-0"
            style={{
              backgroundImage: "url('/images/images-1.jpg')",
            }}
          >
            <div className=" flex flex-col items-start justify-left">
              <p className="text-white lg:text-5xl sm:text-3xl text-lg p-2 font-bold">1 Day Package</p>
              <Link href={'/onedaytour'} className="bg-white text-black sm:py-2 sm:px-4 py-1 px-2 sm:text-lg text-xs rounded m-2">
                Read More
              </Link>
            </div>
          </div>
  
          {/* Card 2 */}
          <div
            className="pt-[20%] pb-[20%] bg-cover bg-center lg:w-[48%] w-[96%] mb-[2%] lg:mb-0"
            style={{
              backgroundImage: "url('/images/image-2.jpg')",
            }}
          >
            <div className=" flex flex-col items-start justify-center">
              <p className="text-white lg:text-5xl sm:text-3xl text-lg p-2 font-bold">2 Day Package</p>
              <Link href={'/onedaytour'} className="bg-white text-black sm:py-2 sm:px-4 py-1 px-2 sm:text-lg text-xs rounded m-2">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PackageSection;
  