import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/cryptoworld.png",
      projectName: "CryptoWorld",
      projectLink: "https://crypto-world-js.netlify.app/",
      projectDescription:
        "I developed a web app with React.js, Redux, and RapidAPI to deliver comprehensive cryptocurrency information. Users can view and filter cryptocurrency stats and news, ensuring they stay updated on market trends. This project highlights my ability to create dynamic, user-centric web applications with seamless and efficient experiences.",
      projectTech: [
        "ReactJS",
        "Redux",
        "Typescript",
        "RapidAPI"
      ],
      projectExternalLinks: {
        github: "https://github.com/McAsh09/crypto-world",
        externalLink: "https://crypto-world-js.netlify.app/",
      },
    },
    {
      image: "/mobivax.png",
      projectName: "MobiVax",
      projectLink: "https://mobivax.netlify.app/",
      projectDescription:
        "I developed a web app focused on vaccination for the elderly and specially-abled individuals. I created the user interface using React.js, including a user login page with card components and various event handlers to enhance functionality. This project highlights my skills in designing accessible and user-friendly web applications.",
      projectTech: [
        "ReactJS",
      ],
      projectExternalLinks: {
        github: "https://github.com/McAsh09/error404_fullstack_hack21",
        externalLink: "https://mobivax.netlify.app/",
      },
    },
    {
      image: "/hobbyprojects.png",
      projectName: "Hobby Projects",
      projectLink: "https://my-hobby-projects.netlify.app/",
      projectDescription:
        "I developed a web app using React.js and Redux that enables users to add, edit, and delete their hobby projects. The app provides a user-friendly interface for managing personal projects, allowing for easy updates and removals. This project showcases my ability to build dynamic and interactive applications with comprehensive functionality.",
      projectTech: [
        "ReactJS",
        "Redux"
      ],
      projectExternalLinks: {
        github: "https://github.com/McAsh09/hobby-projects",
        externalLink: "https://my-hobby-projects.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
