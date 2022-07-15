import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FiArrowRight } from "react-icons/fi";
AOS.init();
const project_card = ({ img, title, desc, link }) => {
  return (
    <a href={link}>
      <div
        className="card group cursor-pointer"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      >
        <img
          src={img}
          className="mb-6 group-hover:scale-90 transition-all ease-in-out"
        />
        <div className="flex items-center">
          <div className="flex-grow">
            <p className="text-xl md:text-2xl text-secondary-500 font-bold">
              {title}
            </p>
            <p className="text-sm lg:text-base text-primary-300 mr-6">{desc}</p>
          </div>
          <div className="bg-transparent rounded-full px-2 py-2 group-hover:bg-secondary-500 transition-all ease-in-out shadow">
            <FiArrowRight className="text-2xl text-primary-300 group-hover:-rotate-45 transition-all ease-in-out   group-hover:text-white" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default project_card;
