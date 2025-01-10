import Image from 'next/image';
const SafariSection = ({
    backgroundImage,
  mobileImage
  }) => {
    return (
      <section>

      <div className="images">
        <a href="https://wa.me/7790966554" className='hidden sm:hidden md:flex lg:flex'>
        <Image src={backgroundImage}  width={1920} 
        height={720} alt="banner" className='hidden sm:hidden md:flex lg:flex' /></a>
       <a href="https://wa.me/7790966554" className='flex sm:flex md:hidden lg:hidden'>
       <Image src={mobileImage}  width={1440} 
        height={2000} alt="banner" className='flex sm:flex md:hidden lg:hidden' /></a>
      </div>
    </section>
      
      
      
 
      
    );
  };
  
  export default SafariSection;
  