import { useEffect } from "react";
import image from "/src/assets/WhatsApp22 Image 2023-10-04 at 14.36.11.jpeg";
import Aos from "aos";

import "aos/dist/aos.css";
import Lottie from "lottie-react";
import lottie_button from "../../src/component/buttonlottie.json";


export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className=" bg-black  " id="About">
      <div className=" flex gap-2 justify-center  ">
        <h1 className="  text-fuchsia-100 text-3xl  font-Quick">About </h1>
        <h1
          className=" text-fuchsia-800 text-5xl   font-Quintessential "
          data-aos="flip-right"
        >
          Me
        </h1>
      </div>
      <div className=" md:grid grid-cols-12 md:p-14 p-5">
        <div
          data-aos="fade-up"
          className=" col-span-6 grid   justify-start p-5 font-Quick text-lg md:mt-28 mt-5  text-fuchsia-300 items-start "
        >
          <p>
            {" "}
            I am a motivated software engineer, holding a BSc in Software
            Engineering from Daffodil International University. With hands-on
            experience gained through an internship at Deshifarmer company, I
            transitioned into a role as a Junior Developer at Deshifarmer.
            Proficient in technologies like Laravel, React, and Tailwind CSS,
            API I enjoy creating user-centric solutions. I have a keen interest
            in design, evident from my After Effects course at SEIP BITM. I
            thrive in collaborative environments and am passionate about
            tackling challenges. My goal is to contribute my skills to
            innovative projects and continue evolving in the dynamic tech
            landscape.
           
            
            <a href="https://github.com/Nadiea" target="_blank" rel="noopener noreferrer">
  <button className="button-with-animation">
    <Lottie animationData={lottie_button} className="mt-5 w-60" loop={true} />
  </button>
</a>



   
          </p>
        </div>
        <div className=" col-span-6 grid justify-center border border-fuchsia-400 p-20  ">
          <img className=" " src={image} data-aos="fade-down" />
          <div className=" flex justify-between mt-5 it">
            <div>
            <a href="https://www.facebook.com/nipun.hoq/">  <svg
                className="h-8 w-8 text-blue-500 animate-bounce"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg></a>
            </div>
            <a href="https://t.me/NadieaNipun">
            <div>
              <svg
                className="h-8 w-8 text-blue-500 animate-bounce"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
            </div>
            </a>
            <div>
             <a href="https://www.instagram.com/nadiea80/"> <svg
                className="h-8 w-8 text-pink-500 animate-bounce"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/nadiea-akther-nipun-b89332228/"><svg
                className="h-8 w-8 text-blue-500 animate-bounce"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                <rect x="2" y="9" width="4" height="12" />{" "}
                <circle cx="4" cy="4" r="2" />
              </svg></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
