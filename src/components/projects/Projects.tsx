"use client";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Friends Project",
    description: "Keep your contacts here.",
    image: "/images/projects/friends-project.png",
    gitUrl: "https://github.com/RanjanKumar93/Friends-Project.git",
    previewUrl: "https://friends-project-five.vercel.app/",
  },
  {
    id: 2,
    title: "Go-To-80 Game",
    description: "Go to 80 first to win.",
    image: "/images/projects/go-to-80.png",
    gitUrl: "https://github.com/RanjanKumar93/go-to-80-game.git",
    previewUrl: "https://go-to-80-game.vercel.app/",
  },
  {
    id: 3,
    title: "Find countries Project",
    description: "Find about countries here.",
    image: "/images/projects/find-country.png",
    gitUrl: "https://github.com/RanjanKumar93/FindCountries-Project.git",
    previewUrl: "https://find-countries-project.vercel.app/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul
        ref={ref}
        className="grid sm:grid-cols-2  lg:pr-20 xl:pr-16 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
