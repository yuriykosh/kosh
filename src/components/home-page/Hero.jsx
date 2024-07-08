import Image from "next/image";
import koshPic from "/public/KOSH.webp";
import homeBG from "/public/home-bg.webp";

function Hero() {
  return (
    <>
      <section>
        <h1 className="sr-only">
          KOSH - Digital-first Design and Development Studio
        </h1>
        <div className="flex flex-col bg-none">
          <div className="block w-full h-20 bg-blue"></div>
          <Image
            src={koshPic}
            style={{ maxWidth: "100%", height: "auto" }}
            alt="Picture of the author"
          />
          <Image
            src={homeBG}
            style={{ maxWidth: "100%", height: "auto" }}
            alt="Picture of the author"
            className="fixed top-52 z-[-1] scale-150"
          />
        </div>
        <div className="flex gap-[480px] w-full flex-col -translate-y-[1px]">
          <p className="px-5 py-8 text-xl text-white bg-blue font-erode">
            We work with brands to craft digital solutions, strategically make
            the right things, and just build fun stuff. We&#39;re a
            digital-first design &amp; development studio.
          </p>
          <div className="flex flex-col w-full text-white bg-blue">
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
      </section>
    </>
  );
}
export default Hero;
