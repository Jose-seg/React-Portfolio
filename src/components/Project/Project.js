import React from 'react';
import './Project.css'

const Project = ({title, image, deployedUrl, githubUrl}) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={image} alt={title} className="project-image" />
            <button>
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">View Deployed Application</a>
            </button>
            <br/>
            <button>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </button>
        </div>
    );
}

export default Project;