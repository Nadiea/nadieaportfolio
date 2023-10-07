import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import Homelottie from "/src/component/Homelottie.json";
import image from "/src/assets/WhatsApp Image 2023-10-03 at 14.34.58.jpeg";

export default function Banner() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  
  return (
    <div className="bg-black md:grid grid-cols-12 md:gap-12 gap-0 w-screen md:mb-10  mb-0 ">
      <div className="items-center md:mt-10 mt-0 flex md:justify-end justify-center rounded-full col-span-6">
        <img
          data-aos="zoom-in"
          className="rounded-full md:w-9/12 w-9/12 border-fuchsia-500 border-8"
          src={image}
          alt="Profile"
        />
      </div>
      <div
        data-aos="fade-up"
        className="flex-col md:mt-44 mt-5 col-span-6 md:p-0 p-5 md:justify-start justify-center md:ml-0 ml-20 items-center"
      >
        <div className="flex">
          <span className="md:text-5xl text-5xl font-Quick text-violet-50">
            Hey there
          </span>
          <div className="md:text-6xl md:block hidden text-5xl animated-bounce text-violet-50">
            👋🏻
          </div>
        </div>

        <TypeAnimation
          sequence={["    I'm Nadiea Akther Nipun", 1000]}
          wrapper="span"
          speed={40}
          className="font-Quick md:text-5xl text-lg md:mt-3 mt-5 text-fuchsia-400"
          repeat={Infinity}
        />
<Lottie animationData={Homelottie} className="    w-60  " loop={true} />
      </div>
    </div>
  );
}

// Initialize Lottie animation after component renders
