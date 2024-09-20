import Image from 'next/image';
import Link from 'next/link';

const BannerSection = ({ title, subtitle, breadcrumbLink, breadcrumbText, imageUrl }) => {
  return (
    <section 
      className="relative bg-cover bg-top-center bg-no-repeat text-white" 
      style={{ backgroundImage: `url(${imageUrl})` }} // Background image from props
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-contain bg-bottom bg-no-repeat opacity-50 pointer-events-none" 
      />

      {/* Content Section */}
      <div className="container relative z-10 flex flex-col items-start justify-center h-[600px] md:h-[900px]">
        {/* Left Text Section */}
        <div className="w-full lg:w-[700px] text-center lg:text-left">
          <h1 className="text-3xl md:text-[45px] font-bold mb-4 leading-tight uppercase">
            {title} {/* Title from props */}
          </h1>
          <p className="text-lg md:text-xl mb-6">{subtitle}</p> {/* Subtitle from props */}
       
          <div className="flex items-center mb-5 text-white text-lg mt-4">
            <Link href={breadcrumbLink} className="text-[#65BC7B]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{breadcrumbText}</span> {/* Breadcrumb text from props */}
          </div>
        </div>
      </div>

      {/* SVG Shape at the bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-[180px] fill-current text-[#ffffff]"
        >
          <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" />
        </svg>
      </div>
    </section>
  );
};

export default BannerSection;
