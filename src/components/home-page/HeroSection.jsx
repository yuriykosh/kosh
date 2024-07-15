import Image from "next/image";

import koshPic from "/public/KOSH.webp";
import homeBG from "/public/home-bg.webp";

function Hero() {
  return (
    <>
      <section className="lg:flex lg:border-b lg:border-white">
        <h1 className="sr-only">
          KOSH - Digital-first Design and Development Studio
        </h1>

        <div className="relative flex flex-col bg-none lg:flex-grow lg:border-r lg:border-white lg:h-[606px]">
          <div className="block w-full h-40  bg-blue after:content-[''] after:block after:absolute after:-bottom-[1px] after:bg-blue after:h-[2px] after:w-full md:after:h-px md:after:bottom-0 lg:h-full"></div>
          <Image
            src={koshPic}
            style={{ maxWidth: "100%", height: "auto" }}
            alt="Logo of KOSH Studio with transparent background"
          />
        </div>

        <div className="flex gap-[480px] w-full flex-col md:gap-0 md:flex-row md:mb-[526px] md:justify-stretch  lg:flex-col-reverse lg:gap-[277px] lg:bg-blue lg:pt-20 lg:flex-none lg:w-[521px]">
          <div className="flex px-5 py-8 text-xl text-white bg-blue font-erode md:w-2/5 lg:w-full">
            <p className="self-end">
              We work with brands to craft digital solutions, strategically make
              the right things, and just build fun stuff. We&#39;re a
              digital-first design &amp; development studio.
            </p>
          </div>

          <div
            id="services"
            className="flex flex-col w-full text-white bg-blue md:w-auto md:grow md:border-l md:border-t md:border-white lg:border-t-0 lg:border-l-0"
          >
            <h2 className="flex p-5 border-b">Services:</h2>

            <ul className="flex flex-col gap-2 p-5">
              <li>Design</li>
              <li>Development</li>
              <li>Digital strategy</li>
              <li>Motion design</li>
              <li>3D rendering</li>
              <li>Packaging</li>
              <li>Branding</li>
            </ul>
          </div>
        </div>

        <Image
          src={homeBG}
          style={{ maxWidth: "100%", height: "auto" }}
          alt="Background picture of concrete stairs"
          className="fixed top-52 z-[-1] scale-150 md:scale-110 md:top-20"
        />
      </section>
    </>
  );
}
export default Hero;
