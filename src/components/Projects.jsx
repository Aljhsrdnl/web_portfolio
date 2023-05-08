import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import Card from "./ProjectCard";
import { projectsData } from "../data/projectsData";

AOS.init();
const Projects = () => {
  return (
    <section id="portfolio" className="bg-alternate">
      <div className="max-w-7xl mx-auto py-24 md:py-36 lg:py-52 px-4 md:px-8 lg:px-16">
        <h2
          className="text-4xl lg:text-5xl font-semibold text-primary-100 mb-16"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {
            projectsData.map(project => {
              return (
                <Card
                  img={project.img}
                  title={project.title}
                  desc={project.desc}
                  link={project.link}
                  isClickable={project.isClickable}
                  />
              )
            })
          }
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
