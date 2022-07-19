import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
AOS.init();
const Contact = () => {
  return (
    <section className="h-max py-52 bg-alternate " id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <h1
          className="font-bold text-white text-3xl md:text-4xl block text-center mb-20"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Let's work together
        </h1>
        <p
          className="text-2xl md:text-4xl  text-secondary-500 underline block text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          alejahsrdnl@gmail.com
        </p>
        <div className="flex items-center justify-center space-x-6">
          <a
            className="cursor-pointer hover:-translate-y-2 transition-all"
            href="https://github.com/Aljhsrdnl"
            target="_blank"
          >
            <FaGithub
              className="text-primary-400 text-2xl md:text-3xl cursor-pointer"
              data-aos="fade-down"
              data-aos-delay="2200"
              data-aos-duration="1700"
            />
          </a>
          <a
            className="cursor-pointer hover:-translate-y-2 transition-all"
            href="https://www.instagram.com/alejahsardiniola/"
            target="_blank"
          >
            <FaInstagram
              className="text-primary-400 text-2xl md:text-3xl cursor-pointer"
              data-aos="fade-down"
              data-aos-delay="2500"
              data-aos-duration="1700"
            />
          </a>
          <a
            className="cursor-pointer hover:-translate-y-2 transition-all"
            href="https://www.linkedin.com/in/alejah-sardiniola-78300a234/"
            target="_blank"
          >
            <FaLinkedinIn
              className="text-primary-400 text-2xl md:text-3xl cursor-pointer"
              data-aos="fade-down"
              data-aos-delay="2800"
              data-aos-duration="1700"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
