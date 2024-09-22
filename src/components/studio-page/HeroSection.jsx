import Image from "next/image";
import studioPic from "/public/studio-hero.webp";
import koshPic from "/public/KOSH-blue.svg";

const HeroSection = () => {
  return (
    <section className="pt-20 bg-white text-blue">
      <div className="flex flex-col border-b border-blue md:flex-row lg:h-[496px] xl:h-[560px] 2xl:h-[528px]">
        <div className="flex flex-col lg:w-full">
          <div className="flex items-baseline justify-between p-5 border-b border-blue">
            <p className="animate-slidein [--slidein-delay:350ms] opacity-0">
              about
            </p>
            {/* <div className=""> */}
            <Image
              src={koshPic}
              alt="KOSH studio full blue logo"
              className="object-cover w-auto h-12 animate-slidein [--slidein-delay:350ms] opacity-0"
            />
            {/* </div> */}
          </div>
          <div className="h-[60vh] overflow-hidden md:hidden">
            <Image
              src={studioPic}
              alt="bla bla"
              sizes="100vw"
              quality={100}
              placeholder="blur"
              // Make the image display full width
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="flex md:h-full px-5 py-10 text-xl text-blue bg-white font-erode xl:text-[26px] xl:leading-[32px]">
            <p className="self-end animate-slidein [--slidein-delay:550ms] opacity-0">
              At KOSH, we blend creativity with technology to deliver innovative
              digital solutions.We believe in leveraging design and technology
              to transform ideas into impactful digital experiences. Our mission
              is to empower businesses through intuitive and effective
              solutions.
            </p>
          </div>
        </div>
        <div className="hidden overflow-hidden md:block lg:flex-none lg:w-6/12 lg:border-l lg:border-blue">
          <Image src={studioPic} alt="bla bla" className="" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
