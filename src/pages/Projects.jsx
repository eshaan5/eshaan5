import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Each project within this portfolio is a testament to my dedication to innovation, showcasing impactful solutions in web development—a reflection of my relentless passion for driving change through technology.</p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={project.iconUrl} alt={project.name} className="w-[90%] h-[90%] object-contain rounded-3xl" />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
            </div>
            <div className="mt-5 flex items-center gap-2 font-poppins">
              <Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 flex items-center gap-2">
                See Project
                <img src={arrow} alt="Arrow" className="w-4 h-4 object-contain" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
