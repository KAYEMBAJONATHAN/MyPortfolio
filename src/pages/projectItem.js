import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ image, name, id }) => {
  const navigate = useNavigate();

    const style = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div className="projectItem" onClick={() => {
            navigate('/project/' + id);
        }}>
            <div style={style} className="bgImage" />
            <h1>{name}</h1>
        </div>
    );
};

export default ProjectItem;