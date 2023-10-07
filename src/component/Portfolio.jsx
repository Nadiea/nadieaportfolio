import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "/src/assets/port1.png";
import img2 from "/src/assets/port2.png";
import img3 from "/src/assets/port3.png";
import img4 from "/src/assets/port4.png";
import Lottie from "lottie-react";

import img5 from "/src/assets/port5.png";
import img6 from "/src/assets/port6.png";
import lottie_about from "/src/component/Aboutlottie.json";

export default function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className=" p-12 " id="Portfolio">
      <h1 data-aos="flip-right" className="  text-fuchsia-100 text-3xl flex justify-center  font-Quick">
        My Protfolio
       
      </h1>
    <div className=" flex justify-center">  <Lottie
              animationData={lottie_about}
              className=" mt-5  w-60   "
              loop={true}
            /></div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
        <div>
          <img
              data-aos="flip-right"
           
       
            className="md:h-64 max-w-full rounded-lg  hover:scale-110 hover:shadow-2xl  hover:shadow-fuchsia-900"
            src={img1}
            alt=""
          />
        </div>
        <div>
          <img
              data-aos="flip-right"
           
            className="md:h-64 max-w-full rounded-lg  hover:scale-110 hover:shadow-2xl  hover:shadow-fuchsia-900"
            src={img2}
            alt=""
          />
        </div>
        <div>
          <img
              data-aos="flip-right"
         
            className="md:h-64 max-w-full rounded-lg  hover:scale-110 hover:shadow-2xl  hover:shadow-fuchsia-900"
            src={img3}
            alt=""
          />
        </div>
        <div>
          <img
              data-aos="flip-right"
           
            className="md:h-64 md:w-screen max-w-full rounded-lg  hover:scale-110 hover:shadow-2xl  hover:shadow-fuchsia-900"
            src={img4}
            alt=""
          />
        </div>
        <div>
          <img
              data-aos="flip-right"
           
            className="md:h-64 max-w-full rounded-lg  hover:scale-110 hover:shadow-2xl  hover:shadow-fuchsia-900"
            src={img5}
            alt=""
          />
        </div>
        <div>
          <img
              data-aos="flip-right"
           
            className="md:h-64 max-w-full rounded-lg  hover:scale-110 hover:shadow-2xl  hover:shadow-fuchsia-900"
            src={img6}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
