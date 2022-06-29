import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//logo
import logo from "../assets/logo.png";

//icons
import { FaDribbble, FaBehance, FaInstagram, FaGithub } from "react-icons/fa";

AOS.init();
const Navbar = () => {
  return (
    <nav className="flex items-center w-full">
      <div
        className="flex-grow "
        data-aos="fade-down"
        data-aos-delay="1600"
        data-duration="1000"
      >
        <img src={logo} className="w-24 h-24" />
      </div>

      <div className="hidden lg:flex ">
        <div
          className="mr-6 "
          data-aos="fade-down"
          data-aos-delay="1800"
          data-duration="1000"
        >
          <a href="#portfolio" className=" text-primary-300 peer px-2">
            Portfolio
          </a>
          <div className="h-0.5 w-0 bg-transparent peer-hover:w-full peer-hover:bg-secondary-500 transition-all ease-in"></div>
        </div>
        <div
          className="mr-6"
          data-aos="fade-down"
          data-aos-delay="2000"
          data-duration="1000"
        >
          <a href="#Skills" className=" text-primary-300 peer px-2">
            Skills
          </a>
          <div className="h-0.5 w-0 bg-transparent peer-hover:w-full peer-hover:bg-secondary-500 transition-all ease-in"></div>
        </div>
        <div
          className="mr-6"
          data-aos="fade-down"
          data-aos-delay="2200"
          data-duration="1000"
        >
          <a href="#Contact" className=" text-primary-300 peer px-2">
            Contact
          </a>
          <div className="h-0.5 w-0 bg-transparent peer-hover:w-full peer-hover:bg-secondary-500 transition-all ease-in"></div>
        </div>
      </div>
      <div className="icons flex ">
        <div
          className="relative flex justify-center items-center w-12 h-12 mr-4 "
          data-aos="fade-down"
          data-aos-delay="2400"
          data-duration="1000"
        >
          <a href="https://dribbble.com/alejah" className="z-10 peer">
            <FaDribbble className="text-primary-300 text-xl hover:text-white transition-color ease-in" />
          </a>
          <div className="w-0 h-0 top-5 peer-hover:w-12 peer-hover:h-12 bg-secondary-500 rounded-full absolute peer-hover:top-0 z-0 transition-all ease-in"></div>
        </div>
        <div
          className="relative flex justify-center items-center w-12 h-12 mr-4"
          data-aos="fade-down"
          data-aos-delay="2600"
          data-duration="1000"
        >
          <a href="https://dribbble.com/alejah" className="z-10 peer">
            <FaBehance className="text-primary-300 text-xl hover:text-white transition-color ease-in" />
          </a>
          <div className="w-0 h-0 top-5 peer-hover:w-12 peer-hover:h-12 bg-secondary-500 rounded-full absolute peer-hover:top-0 z-0 transition-all ease-in"></div>
        </div>
        <div
          className="relative flex justify-center items-center w-12 h-12 mr-4"
          data-aos="fade-down"
          data-aos-delay="2800"
          data-duration="1000"
        >
          <a
            href="https://www.instagram.com/alejahsardiniola/"
            className="z-10 peer"
          >
            <FaInstagram className="text-primary-300 text-xl hover:text-white transition-color ease-in" />
          </a>
          <div className="w-0 h-0 top-5 peer-hover:w-12 peer-hover:h-12 bg-secondary-500 rounded-full absolute peer-hover:top-0 z-0 transition-all ease-in"></div>
        </div>
        <div
          className="relative flex justify-center items-center w-12 h-12"
          data-aos="fade-down"
          data-aos-delay="3000"
          data-duration="1000"
        >
          <a href="https://github.com/Aljhsrdnl" className="z-10 peer">
            <FaGithub className="text-primary-300 text-xl hover:text-white transition-color ease-in" />
          </a>
          <div className="w-0 h-0 top-5 peer-hover:w-12 peer-hover:h-12 bg-secondary-500 rounded-full absolute peer-hover:top-0 z-0 transition-all ease-in"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
