import React from "react";
import '../App.css';

function Qualification() {
    return (
        <section id="qualification" className="qualification">
            <h2>Qualification</h2>
            <div className="qualification-list">
            <div className="qualification-card">
                <h3>🎓 BCA - Bachelor of Computer Applications</h3>
                <p><strong>University:</strong> Annamalai University</p>
                <p><strong>Year:</strong> 2007 - 2010</p>
                </div>

                <div className="qualification-card">
                <h3>📊 Tally</h3>
                <p><strong>Institute:</strong> CSC</p>
                <p><strong>Year:</strong> Jul'2011 - Oct'2011</p>
                </div>

                <div className="qualification-card">
                <h3>💻 Full Stack Developer</h3>
                <p><strong>Institute:</strong> Besant Technologies</p>
                <p><strong>Year:</strong> 2024 - 2025</p>
                </div>
            
            </div>
        </section>
    );
}   

export default Qualification;