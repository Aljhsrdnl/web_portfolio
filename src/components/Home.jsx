import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie";
import animationData from "../assets/bg-lottiie.json";
//picture
import pic from "../assets/me.png";

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
    <main className="flex items-center">
      <div
        className="w-3/4 lg:w-1/2"
        data-aos="fade-right"
        data-aos-duration="1800"
      >
        <p className="text-secondary-500 text-xl md:text-2xl font-medium mb-8 lg:mb-10">
          Hello I'm
        </p>
        <p className="text-6xl lg:text-7xl font-bold text-white mb-8 lg:mb-10">
          Alejah Sardiniola
        </p>
        <p className="text-primary-300 md:text-lg mb-8 lg:mb-10">
          I like to design the UI of mobile and desktop web applications and I
          fancy building these designs to web apps using React. I am currently
          on my 4th year at West Visayas State University taking up BS Computer
          Science.
        </p>
        <div>
          <button className="py-2 px-4 bg-secondary-500 rounded-md shadow text-primary-900 font-bold border border-secondary-500 mr-6 hover:border-secondary-600 hover:bg-secondary-600 transition-all ease">
            GET IN TOUCH
          </button>
          <button className="py-2 px-4 bg-transparent border border-secondary-500 text-secondary-500 rounded-md shadow font-medium hover:bg-secondary-500 hover:text-primary-900 transition-all ease-in">
            DOWNLOAD CV
          </button>
        </div>
      </div>
      {/* <div className="absolute top-0 z-0">
        <Lottie options={defaultOptions} height={700} width={700} />
      </div>  */}
      <div
        className="relative w-1/2 hidden lg:block"
        data-aos="fade-left"
        data-aos-duration="1800"
      >
        <div className="w-96 h-96 bg-primary-200 rounded-full absolute opacity-10 top-10 right-5 -z-20"></div>
        <img src={pic} className="z-30" />
      </div>
    </main>
  );
};

export default Home;
