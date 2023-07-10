import React from 'react';
import Project from '../Project/Project';
import './Portfolio.css'

function Portfolio({ projects }) {
    return (
        <div>
            <h2>Portfolio</h2>
            <div className="project-grid">
                {projects.map(project => (
                    <Project 
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        deployedUrl={project.deployedUrl}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;