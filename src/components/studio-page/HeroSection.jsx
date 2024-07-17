import Image from "next/image";
import studioPic from "/public/studio-hero.webp";
import koshPic from "/public/KOSH-blue.svg";

const HeroSection = () => {
  return (
    <section className="pt-20 bg-white text-blue">
      <div className="flex flex-col border-b border-blue">
        <div className="flex flex-col">
          <div className="flex items-baseline justify-between p-5 border-b border-blue">
            <p>about</p>
            {/* <div className=""> */}
            <Image
              src={koshPic}
              alt="KOSH studio full blue logo"
              className="object-cover w-auto h-12"
            />
            {/* </div> */}
          </div>
          <div className="h-[60vh] overflow-hidden md:hidden">
            <Image src={studioPic} alt="bla bla" className="" />
          </div>
          <div className="flex px-5 py-10 text-xl text-blue bg-white font-erode xl:text-[26px] xl:leading-[32px]">
            <p className="self-end">
              At KOSH, we blend creativity with technology to deliver innovative
              digital solutions.We believe in leveraging design and technology
              to transform ideas into impactful digital experiences. Our mission
              is to empower businesses through intuitive and effective
              solutions.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <Image src={studioPic} alt="bla bla" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
