import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiVuedotjs, SiExpress } from 'react-icons/si';
import './Skills.css'; 

const Skills = () => {
  const skillList = [
    { name: 'HTML', icon: <FaHtml5 className="text-[#e34f26]" />, percentage: 95 },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#1572b6]" />, percentage: 95 },
    { name: 'JavaScript', icon: <FaJsSquare className="text-[#f7df1e]" />, percentage: 90 },
    { name: 'Python', icon: <FaPython className="text-[#3776ab]" />, percentage: 60 },
    { name: 'Java', icon: <FaJava className="text-[#007396]" />, percentage: 65 },
    { name: 'React', icon: <FaReact className="text-[#61dafb]" />, percentage: 90 },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6db33f]" />, percentage: 60 },
    { name: 'Vue.js', icon: <SiVuedotjs className="text-[#4fc08d]" />, percentage: 70 },
    { name: 'Express.js', icon: <SiExpress className="text-[#828282]" />, percentage: 60 },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, percentage: 60 }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        <div className="hidden md:flex items-center justify-center pt-44">
          <h3 className="text-2xl font-bold text-purple-400 uppercase rotate-[-90deg] border-b-2 border-purple-500 pb-1">Skills</h3>
        </div>

        <div className="flex-1 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">What I do</h2>
            <p className="text-gray-200 max-w-3xl mx-auto">I am a Software Engineering undergraduate specialized in frontend interfaces, backend systems, and modern graphic illustrations.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {skillList.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p className="text-sm font-bold uppercase text-gray-300 mb-3">{skill.name}</p>
                <div className="progress-bar-bg">
                  <div className="progress-fill" style={{ width: `${skill.percentage}%` }}></div>
                </div>
                <span className="text-xs font-semibold text-purple-400">{skill.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;