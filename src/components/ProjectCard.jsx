import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FiArrowRight } from "react-icons/fi";
import { FaWrench } from "react-icons/fa";

AOS.init();
const project_card = ({ img, title, desc, link, isClickable }) => {
	return (
		<a href={link} target="_blank" className="relative">
			<div
				className={`card group ${
					!isClickable && "cursor-not-allowed hover:p-8"
				}`}
				data-aos="fade-up"
				data-aos-easing="ease-in-sine"
				data-aos-once="true">
				{!isClickable && (
					<div className="absolute w-full h-full top-0 hidden group-hover:flex rounded-md left-0 z-40 bg-primary-800/80 text-white text-center flex items-center justify-center">
						{" "}
						<div className="flex flex-col space-y-2">
							<div className="bg-secondary-100/20 p-3 rounded w-1/3 mx-auto">
								<FaWrench className="text-4xl text-secondary-500 text-center mx-auto" />
							</div>{" "}
							<span> Project under development. API is broken.</span>{" "}
						</div>
					</div>
				)}
				<img
					src={img}
					className="mb-6 group-hover:scale-90 transition-all ease-in-out z-20"
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
