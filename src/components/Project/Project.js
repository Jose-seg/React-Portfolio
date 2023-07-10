import React from 'react';

function Project({ title, image, deployedUrl, githubUrl }) {
    return (
        <div className="project-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <a href={deployedUrl}>View Deployed Application</a>
            <a href={githubUrl}>View on GitHub</a>
        </div>
    );
}

export default Project;