import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//projects
import proj_1 from "../assets/aquarium.jpg";
import proj_2 from "../assets/goeat.jpg";
import proj_3 from "../assets/seek_knowledge.jpg";
import proj_4 from "../assets/r_exchange.jpg";

import Card from "./project_card";

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
          <Card
            img={proj_4}
            title="rExchange"
            desc="An online currency exchange converter."
            link="https://exchange-rate-o01208xtb-aljhsrdnl.vercel.app/"
          />
          <Card
            img={proj_1}
            title="Aquarium"
            desc="A mobile app design for task management."
            link="https://dribbble.com/shots/17393309-Task-Management-Mobile-App"
          />
          <Card
            img={proj_2}
            title="Food Finder Mobile App Design"
            desc="GoEat is a phone navigation app that will aid tourists locate the best authentic local food in the town."
            link="https://dribbble.com/shots/18408000-Food-Finder-Mobile-App-Design"
          />
          <Card
            img={proj_3}
            title="SeekKnowledge"
            desc="A design for a website offering online courses."
            link="https://dribbble.com/shots/17430547-Online-Course-Website-Design"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
