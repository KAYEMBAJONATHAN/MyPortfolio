import React from "react";
import ProjectItem from "./projectItem";
import { projectLists } from "../ProjectAssets/projectList";
import '../pages/project.css';

const Project = () => {
  return (
    <div className="project">
      <h1 className="projectTitle">My Personal Projects</h1>
      <div className="projectLists">
        {projectLists.map((project) => {
          return <ProjectItem key={project.id} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
};

export default Project;
