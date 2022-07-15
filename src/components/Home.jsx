import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie";
import animationData from "../assets/b.json";
//picture
import pic from "../assets/me.png";

//icons
import { FiDownload } from "react-icons/fi";

AOS.init();

const Home = () => {
  // ------------------------->>Lottie Settings
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex items-center flex-grow py-12 px-4 md:px-8 lg:px-16">
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1800"
        >
          <p className="text-secondary-500 text-xl md:text-2xl font-medium mb-8 lg:mb-10 w-3/4 lg:w-full">
            Hello I'm
          </p>
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 lg:mb-10 w-3/4 lg:w-full">
            Alejah Sardiniola
          </p>
          <p className="text-primary-300 text-base md:text-lg mb-8 lg:mb-10 w-3/4 lg:w-full">
            I like to design the UI of mobile and desktop web applications and I
            fancy building these designs to web apps using React.js. I am
            currently on my 4th year at West Visayas State University taking up
            BS Computer Science.
          </p>
          <div className="w-full">
            <button className="py-2 px-4 w-40 bg-secondary-500 rounded-md shadow text-primary-900 font-bold border border-secondary-500 mr-6 hover:border-secondary-600 hover:bg-secondary-600 transition-all ease mb-4">
              GET IN TOUCH
            </button>
            <button className="py-2 px-4 w-40 bg-transparent border border-secondary-500 text-secondary-500 rounded-md shadow font-medium hover:bg-secondary-500 hover:text-primary-900 transition-all ease-in">
              <FiDownload className="inline mr-2" />
              RESUME
            </button>
          </div>
        </div>
        <div className="absolute top-20 right-10 opacity-50 z-0">
          <Lottie options={defaultOptions} height={600} width={600} />
        </div>
        <div
          className="relative w-1/2 hidden lg:block"
          data-aos="fade-left"
          data-aos-duration="1800"
        >
          <div className="w-80 h-80 bg-primary-200 rounded-full absolute opacity-10 top-10 right-5 -z-20"></div>
          <img src={pic} className="z-30 w-96 h-96 block mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Home;
