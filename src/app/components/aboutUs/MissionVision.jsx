import Image from "next/image";
import Link from "next/link";

const MissionVision = () => {
  return (
    <section className="bg-gradient-to-r from-[#0C2951] to-[#0C122A] my-12">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
  

        {/* Left Text Section */}
        <div className="text-left lg:w-1/2 w-full mb-10 lg:mb-0 py-8">
          <h2 className="Heading2 mb-5">OUR MISSION AND VISION</h2>
          <p className="text-white text mb-10">
            Enabling financial institutions to access global markets through
            advanced innovations in connectivity. Innovating technology to shape
            the future of the finance industry.
          </p>
          <Link
            href="/contact"
            className="bg-primary text hover:bg-white hover:text-primary transition text-white font-semibold py-3 px-6 rounded-full shadow-lg"
          >
            Get in Touch!
          </Link>
        </div>
              {/* Right Image Section */}
              <div className="lg:w-1/2 w-full flex justify-end">
          <div className="relative w-full h-[250px] md:h-[350px] mt-[-80px]">
            <Image
              src="/about/rocket.svg" // Replace with actual image path
              alt="Mission and Vision Target"
              layout="fill"
              objectFit="contain"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
