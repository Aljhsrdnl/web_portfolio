import React from "react";

import bg from "../assets/bg_dots.png";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <section className="h-max py-52 " id="skills">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <h2 className="text-4xl lg:text-5xl font-semibold text-primary-100">
            Skills
          </h2>
          <div className="col-span-2 gap-8 grid grid-cols-3 md:grid-cols-4">
            <div>
              <div className="lg:w-16 w-14 h-14 lg:h-16 rounded-full bg-primary-300 flex items-center justify-center mb-4 opacity-30">
                <Icon
                  icon="ic:outline-design-services"
                  className="text-4xl text-primary-900"
                />
              </div>
              <p className="text-base text-primary-300">Visual Design</p>
            </div>
            <div>
              <div className="lg:w-16 w-14 h-14 lg:h-16 rounded-full bg-primary-300 flex items-center justify-center mb-4 opacity-30">
                <Icon
                  icon="ph:flow-arrow-bold"
                  className="text-3xl text-primary-900"
                />
              </div>
              <p className="text-base text-primary-300">Wireframe</p>
            </div>
            <div>
              <div className="lg:w-16 w-14 h-14 lg:h-16 rounded-full bg-primary-300 flex items-center justify-center mb-4 opacity-30">
                <Icon
                  icon="fe:prototype"
                  className="text-4xl text-primary-900"
                />
              </div>
              <p className="text-base text-primary-300">Prototype</p>
            </div>
            <div>
              <div className="lg:w-16 w-14 h-14 lg:h-16 rounded-full bg-primary-300 flex items-center justify-center mb-4 opacity-30">
                <Icon
                  icon="majesticons:ux-circle-line"
                  className="text-4xl text-primary-900"
                />
              </div>
              <p className="text-base text-primary-300">
                User Experience Design
              </p>
            </div>
            <div>
              <div className="lg:w-16 w-14 h-14 lg:h-16 rounded-full bg-primary-300 flex items-center justify-center mb-4 opacity-30">
                <Icon
                  icon="ri:reactjs-line"
                  className="text-4xl text-primary-900"
                />
              </div>
              <p className="text-base text-primary-300">React.js</p>
            </div>
            <div>
              <div className="lg:w-16 w-14 h-14 lg:h-16 rounded-full bg-primary-300 flex items-center justify-center mb-4 opacity-30">
                <Icon
                  icon="akar-icons:javascript-fill"
                  className="text-4xl text-primary-900"
                />
              </div>
              <p className="text-base text-primary-300">Javascript</p>
            </div>
            <div>
              <div className="lg:w-16 w-14 h-14 lg:h-16 rounded-full bg-primary-300 flex items-center justify-center mb-4 opacity-30">
                <Icon
                  icon="fontisto:nodejs"
                  className="text-4xl text-primary-900"
                />
              </div>
              <p className="text-base text-primary-300">Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
