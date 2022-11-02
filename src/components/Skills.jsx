import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../assets/bg_dots.png";
import { Icon } from "@iconify/react";

AOS.init();
const Skills = () => {
  return (
    <section className="h-max py-24 md:py-36 lg:py-52 " id="skills">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <h2
            className="text-4xl lg:text-5xl font-semibold text-primary-100"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
            data-delay="1300"
          >
            Skills
          </h2>
          <div className="col-span-2 gap-12 grid grid-cols-3 md:grid-cols-4">
            <div>
              <p class="text-base text-primary-300">TailwindCSS</p>
            </div>
            <div>
              <p class="text-base text-primary-300">ReactJS</p>
            </div>
            <div>
              <p class="text-base text-primary-300">Javascript</p>
            </div>
            <div>
              <p class="text-base text-primary-300">Git</p>
            </div>
            <div>
              <p class="text-base text-primary-300">Jira</p>
            </div>
            <div>
              <p class="text-base text-primary-300">NodeJS</p>
            </div>
            <div>
              <p class="text-base text-primary-300">MondoDB</p>
            </div>
            <div>
              <p class="text-base text-primary-300">Express</p>
            </div>
            <div>
              <p class="text-base text-primary-300">mySQL</p>
            </div>
            <div>
              <p class="text-base text-primary-300">Python</p>
            </div>
            <div>
              <p class="text-base text-primary-300">Linux Shell Scripting</p>
            </div>
            <div>
              <p class="text-base text-primary-300">Networking Basics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
