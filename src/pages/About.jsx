import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hey, I'm <span className="blue-gradient_text font-semibold drop-shadow">Eshaan</span>👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Software Engineer based in New Delhi, India, specializing in scalable backend systems, data infrastructure, and multi-tenant applications. Currently at Restroworks, where I build analytics pipelines processing millions of events daily, serverless workflows on AWS and GCP, and financial reporting systems for 500+ restaurant tenants. I'm passionate about solving complex engineering problems and turning data into impactful products.</p>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>From building data streaming pipelines and serverless workflows to financial reporting and third-party integrations — here's a look at where I've worked and what I've shipped.</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`experience-${index}`}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img src={experience.icon} alt={experience.company_name} className="w-[100%] h-[100%] object-contain" />
                  </div>
                }
                iconStyle={{
                  background: "#fff",
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div className="">
                  <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-small">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
