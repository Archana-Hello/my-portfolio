import React from "react";
import '../App.css';

function Experience() {
    return (
        <section id="experience" className="experience">
        <h2>Work Experience</h2>

        <div className="experience-timeline">
        <div className="experience-card">
            <h3>🏗️ Architectural Designer</h3>
            <p><strong>Company:</strong> Media Wonders</p>
            <p><strong>Duration:</strong> 2007 - 2009</p>
            <p><strong>Details:</strong> Specialized in 3D modeling using 3D Max and AutoCAD. Created residential and commercial building designs and visualizations.</p>
            <p><strong>Tools:</strong> 3D Max, AutoCAD</p>
        </div>


        <div className="experience-card">
            <h3>🗂️ Administrative</h3>
            <p><strong>Company:</strong> SS Utility Services Pvt. Ltd.</p>
            <p><strong>Duration:</strong> 2009 - October 2014</p>
            <p><strong>Details:</strong> Managed statutory returns, payroll processing, Invoice preparation, ESI/PF compliance, attendance maintenance, and HR-related tasks in the utilities sector.</p>          
            <p><strong>Tools:</strong> MS Office</p>
        </div>

        <div className="experience-card">
            <h3>🗂️ Administrative</h3>
            <p><strong>Company:</strong> VV Facility Services</p>
            <p><strong>Duration:</strong> January 2015 - November 2016</p>
            <p><strong>Details:</strong> Payroll handling, Invoice preparation, ESI/PF compliance, and employee management tasks for a facilities service company.</p>          
            <p><strong>Tools:</strong> MS Office</p>
        </div>

        
        </div>
        </section>
    );
}

export default Experience;