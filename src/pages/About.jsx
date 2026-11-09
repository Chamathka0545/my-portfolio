import React from 'react';
import { FaGraduationCap, FaBriefcase, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I'm a passionate Developer with a love for creating modern web applications. 
        With a strong foundation in JavaScript and React, I enjoy building responsive 
        and user-friendly interfaces. I have experience working on various projects, 
        from small personal websites to larger applications. My goal is to continuously 
        learn and grow as a developer while contributing to meaningful projects that make 
        a difference.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <FaGraduationCap className="about-icon" />
          <h3>Education Background</h3>
          <p><strong>National Diploma in Information Technology </strong> - Institute of Technology University of Moratuwa</p>
          <br/><hr></hr><br/>
          <p><strong>Higher National Diploma  in ICT </strong>Esoft Metro Campus</p>
          <br/><hr></hr><br/>
          <p><strong>Higher National Diploma  in English </strong>Esoft Metro Campus</p>
        </div>

        <div className="about-card">
          <FaBriefcase className="about-icon" />
          <h3>Experience</h3>
          <p><strong>Internship - </strong>People's Bank as Bank Trainee</p>
          <p>(Feb 2023 - Aug 2023)</p>
        </div>

        <div className="about-card">
          <FaRocket className="about-icon" />
          <h3>Aspirations</h3>
          <p>Continuously learning and growing as a developer while contributing to innovative, real-world projects.</p>
        </div>
      </div>
    </section>
  );
};

export default About;