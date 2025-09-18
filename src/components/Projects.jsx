import React from "react";
import '../App.css';

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>


            <div className="project-grid">
            <div className="project-card">
                <h3>🧮 Calculator</h3>
                <p>A basic calculator built using HTML, CSS and JavaScript. Supports standard arithmetic operations with a clean responsive UI.</p>
                <p><strong>Technologies:</strong> HTML5, CSS3, JavaScript</p>

            </div>


            <div className="project-card">
                <h3>🌐 My Portfolio Website</h3>
                <p>Showcase website using React.js for personal branding.</p>
                <p><strong>Technologies:</strong> React.js, HTML5, CSS3</p>

            </div>

            <div className="project-card">
                <h3>📚 Personal Library Tracker</h3>
                <p>Web app to track personal books. Features CRUD with MySQL integration.</p>
                <p><strong>Technologies:</strong> MySQL</p>

            </div>

            </div>

        </section>
    );
}

export default Projects;