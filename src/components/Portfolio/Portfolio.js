import React from 'react';
import Project from '../Project/Project';
import './Portfolio.css'

import projectImage1 from '../../assests/passion greens.png';

function Portfolio({ projects }) {
    return (
        <div>
            <h2>Portfolio</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <Project 
                        key={index}
                        title={project.title}
                        image={index === 0 ? projectImage1 : project.image}
                        deployedUrl={project.deployedUrl}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;



