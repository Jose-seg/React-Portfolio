import React from 'react';

const Project = () => {
  const [projects] = React.useState([
    {
      title: "Project 1",
      imgSrc: "/path/to/project1/image.jpg",
      deployedLink: "https://the-passion-of-the-greens.github.io/The-Passion-Of-The-Greens/",
      githubLink: "https://github.com/The-Passion-of-the-Greens/The-Passion-Of-The-Greens",
    },
    {
      title: "Project 2",
      imgSrc: "/path/to/project2/image.jpg",
      deployedLink: "http://link-to-deployed-project2.com",
      githubLink: "http://github-link-to-project2.com",
    },
    
  ]);

  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          <img src={project.imgSrc} alt={project.title} />
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed Application</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      ))}
    </div>
  );
}

export default Project;