import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../ProjectAssets/projectList";
import { FaGithub } from "react-icons/fa6";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = projectList[id]
   return (
      <div className="project">
         <h1>{project.name}</h1>
         <img src={project.image} alt="img" />
         <FaGithub />
      </div>
   ) 
}

export default ProjectDisplay;