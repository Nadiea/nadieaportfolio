import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "/src/assets/html.png";
import img2 from "/src/assets/tailwind.jpg";
import img3 from "/src/assets/js.jpg";
import img4 from "/src/assets/react.png";
import img5 from "/src/assets/Api.png";

import img6 from "/src/assets/laravel.jpg";

import img7 from "/src/assets/sql.png";

import Lottie from "lottie-react";
import lottie_skill from "../../src/component/Skilllottie.json";
import { useEffect, useState } from "react";

export default function Skill() {
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth > 1000 ? 5 : 2);
 
    useEffect(() => {
      const handleResize = () => {
        setSlidesPerView(window.innerWidth > 1000 ? 5 : 2);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <div id="Skill">
      <h1
        data-aos="zoom-in"
        className="  text-fuchsia-100 text-3xl flex justify-center  font-Quick"
      >
        My Skill
      </h1>
      <div className=" flex justify-center">
        <Lottie
          animationData={lottie_skill}
          className=" mt-2 w-60"
          loop={true}
        />
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        autoplay={{ delay: 3000 }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <figure className="mbg-slate-100 rounded-xl p-8  text-fuchsia-300 bg-black col-span-3">
            <img
              data-aos="fade-down" className="w-36 h-36 rounded-full mx-auto "
              src={img6}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 text-center space-y-4">
              <blockquote>
                <p className="text-lg font-medium" data-aos="fade-right">
                  Laravel
                </p>
              </blockquote>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="mbg-slate-100 rounded-xl p-8  text-fuchsia-300 bg-black col-span-3">
            <img
              data-aos="fade-down" className="w-36 h-36 rounded-full mx-auto"
              src={img1}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 text-center space-y-4">
              <blockquote>
                <p className="text-lg font-medium" data-aos="fade-right">
                  HTMl
                </p>
              </blockquote>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="mbg-slate-100 rounded-xl p-8  text-fuchsia-300 bg-black col-span-3">
            <img
              data-aos="fade-down" className="w-36 h-36 rounded-full mx-auto"
              src={img2}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 text-center space-y-4">
              <blockquote>
                <p className="text-lg font-medium" data-aos="fade-right">
                  TailwindCss
                </p>
              </blockquote>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="mbg-slate-100 rounded-xl p-8  text-fuchsia-300 bg-black col-span-3">
            <img
              data-aos="fade-down" className="w-36 h-36 rounded-full mx-auto"
              src={img3}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 text-center space-y-4">
              <blockquote>
                <p className="text-lg font-medium" data-aos="fade-right">
                  Javascript
                </p>
              </blockquote>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="mbg-slate-100 rounded-xl p-8  text-fuchsia-300 bg-black col-span-3">
            <img
            data-aos="fade-down"  className="w-52 h-36 rounded-full mx-auto"
              src={img4}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 text-center space-y-4">
              <blockquote>
                <p className="text-lg font-medium" data-aos="fade-right">
                  React Js
                </p>
              </blockquote>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="mbg-slate-100 rounded-xl p-8  text-fuchsia-300 bg-black col-span-3">
            <img
              data-aos="fade-down" className="w-36 h-36 rounded-full mx-auto"
              src={img5}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 text-center space-y-4">
              <blockquote>
                <p className="text-lg font-medium" data-aos="fade-right">
                  Rest Api
                </p>
              </blockquote>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="mbg-slate-100 rounded-xl p-8  text-fuchsia-300 bg-black col-span-3">
            <img
              data-aos="fade-down" className="w-36 h-36 rounded-full mx-auto"
              src={img7}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 text-center space-y-4">
              <blockquote>
                <p className="text-lg font-medium" data-aos="fade-right">
                  SQL
                </p>
              </blockquote>
            </div>
          </figure>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
