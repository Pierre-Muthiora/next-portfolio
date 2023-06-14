import React from "react";
import propertyImg from "../public/codepic1.jpg";
import cryptoImg from "../public/codepic2.jpg";
import netflixImg from "../public/codepic1.jpg";
import twitchImg from "../public/codepic2.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#39FF14]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="To-do App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Rock paper scissors"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
