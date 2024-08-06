import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Fintech Global",
      role: "Software Development Engineer",
      url: "https://fintechglobal.center/",
      start: "July 2023",
      end: "Present",
      shortDescription: [
        "I had experience working on a large codebase utilizing Angular and C#.",
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, among others.",
        "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
      ],
    },
    {
      name: "Amazon",
      role: "Software Development Engineer Intern",
      url: "https://www.amazon.in/",
      start: "January 2023",
      end: "July 2023",
      shortDescription: [
        "Migrated internal configurations to AWS AppConfig to improve configuration management.",
        "Optimized API workflows to increase profits.",
        "Automated code review assignment to improve fairness.",
      ],
    },
    {
      name: "QuadB Technologies",
      role: "ReactJs Developer Intern",
      url: "https://quadbtech.com/",
      start: "March 2022",
      end: "July 2022",
      shortDescription: [
        "Built an application based on decentralized no-loss trading protocol.",
        "Improved user experience and functionality of trading website",
      ],
    },
    {
      name: "COOX",
      role: "Web Developer Intern",
      url: "https://www.coox.in/",
      start: "October 2021",
      end: "November 2021",
      shortDescription: [
        "Worked on creating a workflow allowing users to place order more easily",
        "Created multiple generic components that were used website-wide",
      ],
    }
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
