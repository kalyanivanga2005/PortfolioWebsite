import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <h2>My Projects</h2>
      <section id="projects"></section>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Technologies:</strong>
              <br />
              {project.technologies}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;