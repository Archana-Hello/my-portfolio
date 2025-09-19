import React from "react";
import '../App.css';


 function Home() {
    return (
<section id="home" className="home fresh-home">
    <div className="home-content">
    <h1> Hello I'm <span className="magic-name">Archana</span> </h1>
    <h2>Full Stack Developer</h2>
    <p>Skilled in HTML5, CSS3, Javascript, React.js, Java & MySQL. Experience in 3D Architectural Design & Admin/HR roles </p>
    <button className="btn-primary" onClick={() => window.open('https://github.com/Archana-Hello/my-portfolio', '_blank')}>View My GitHub</button>
    </div>
</section>
    );
 }

 export default Home;