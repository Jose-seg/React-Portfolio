import React from 'react';
import Project from '../Project/Project';
import './Portfolio.css'

import projectImage1 from '../../assests/passion greens.png';
import projectImage2 from '../../assests/ResumePocalypseScreenshot.jpg';

function Portfolio({ projects }) {
    return (
        <div>
            <h2>Portfolio</h2>
            <div className="project-grid">
                {projects.map((project, index) => {
                    let image;
                    switch (index) {
                        case 0: 
                            image = projectImage1;
                            break;
                        case 1: 
                            image = projectImage2;
                            break;
                        default:
                            image = project.image;
                    }
                    return (
                        <Project 
                            key={index}
                            title={project.title}
                            image={image}
                            deployedUrl={project.deployedUrl}
                            githubUrl={project.githubUrl}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Portfolio;



