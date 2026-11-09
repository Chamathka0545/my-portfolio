import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaPalette, FaCode, FaClock } from 'react-icons/fa';

const Projects = () => {
  
  const codingProjects = [
    {
      title: "Smart Child Safety & Transport Monitoring System",
      type: "Final Year Group Project (IoT)",
      status: "In Progress / Pending",
      role: "Role: Frontend Developer (Team Member) & Documentation Lead",
      description: "An IoT-based ecosystem designed to ensure the safety of school children during transport. Utilizing hardware like microcontrollers, GPS, and tracking modules, this system monitors student locations in real-time. Currently being developed to integrate seamlessly with backend tracking services.",
      tech: ["ESP32 / AVR", "IoT", "GPS & GSM Modules", "Node.js", "React"],
      github: "https://github.com/Chamathka0545/Child-safety-and-Student-Monitoring-System-.git"
      
    },
    {
      title: "ERP Asset Management Module",
      type: "Group Project",
      status: "Completed",
      role: "My Contribution: Frontend UI Development(Team member) & Asset Assignment Features",
      description: "An enterprise resource planning platform built to manage and audit corporate assets. My main responsibility was implementing the user interface for the Asset Management module, where I built responsive forms and components for Asset Assignments and tracking using React and Tailwind CSS.",
      tech: ["Vue", "Docker", "PostgreSQL", "Golang"],
      github: "https://github.com/NirMAN-15/ERP-Asset-Management-module.git"
      
    },
    {
      title: "Event Management Website",
      type: "Individual Project",
      status: "Completed",
      role: "Role: Full-Stack Developer",
      description: "A comprehensive web application designed to streamline event planning, booking, and scheduling. Built as a solo project, it handles user registration, custom event creation, and interactive scheduling interfaces for a smooth user experience.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Chamathka045" 
    },
    {
      title: "Online Food Ordering System",
      type: "Group Project",
      status: "Completed",
      role: "My Contribution: Front End Developer (Team Member) & 'About Us' Page Lead",
      description: "A web application built to streamline online food browsing and ordering. For this project, I was responsible for designing and developing the structural layout of the 'About Us' page, converting design concepts into clean React components.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nisansala26/online-food-ordering-system--implementation.git"
     
    }
  ];

  
  const creativeWorks = [
    {
      title: "Vector Illustrations & Graphic Designs",
      category: "Digital Art",
      description: "A collection of custom vector designs, creative illustrations, and business assets created using Adobe Illustrator and Photoshop, focusing on clean paths, proper shape management, and balancing color palettes.",
      
      images: ["/images/d_art1.png", "/images/d_art2.png"] 
    },
    {
      title: "Campus Final Art Contribution",
      category: "Traditional Art / Soft Skill",
      description: "Showcasing my creative soft skills and team collaboration through traditional art. Contributed to the final art installations and decorations for official university events, demonstrating leadership, teamwork, and artistic vision.",
      images: ["/images/t_art1.jpg", "/images/t_art2.jpg"] 
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#140a2b] text-white px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide flex justify-center items-center gap-3">
            <FaCode className="text-purple-500 text-3xl md:text-4xl uppercase" /> Technical Projects
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
            A showcase of my software engineering projects, including core full-stack web applications, academic collaborations, and hardware-software IoT integrations.
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {codingProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#1c0f38] border border-purple-950 p-6 rounded-xl flex flex-col justify-between hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 relative"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    {project.type}
                  </span>
                  {project.status === "In Progress / Pending" ? (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-yellow-600/20 text-yellow-400 border border-yellow-500/30 flex items-center gap-1">
                      <FaClock /> Pending
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-green-400">Completed</span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-yellow-500 tracking-wide mb-2">
                  {project.title}
                </h3>
                
                <div className="bg-[#110724] border-l-4 border-purple-500 px-3 py-2 rounded mb-4">
                  <p className="text-xs md:text-sm font-semibold text-purple-300">
                    {project.role}
                  </p>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techItem, i) => (
                    <span key={i} className="text-xs bg-[#110724] text-gray-400 px-2.5 py-1 rounded-md font-medium border border-purple-950">
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-2 border-t border-purple-950/50">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition duration-300"
                  >
                    <FaGithub className="text-lg" /> Source Code
                  </a>
                  {project.live !== "#" && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition duration-300"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <hr className="border-purple-950/50 mb-20" />

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide flex justify-center items-center gap-3">
            <FaPalette className="text-pink-500 text-3xl md:text-4xl uppercase" /> Creative Works & Soft Skills
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
            Beyond coding, I bring ideas to life visually. Here is a look at my graphic design portfolio and team art contributions at university.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {creativeWorks.map((work, index) => (
            <div 
              key={index} 
              className="bg-[#1c0f38] border border-purple-950 p-6 rounded-xl flex flex-col justify-between hover:border-pink-900/50 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-pink-600/20 text-pink-400 border border-pink-500/30">
                  {work.category}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-wide mt-3 mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {work.description}
                </p>
              </div>

              
              <div className="mt-4">
                <p className="text-xs text-purple-400 font-bold mb-2 uppercase tracking-wider">Project Previews:</p>
                <div className="grid grid-cols-2 gap-3">
                  {work.images.map((imgSrc, i) => (
                    <div key={i} className="relative h-32 bg-[#110724] rounded-lg overflow-hidden border border-purple-950 group">
                      <img 
                        src={imgSrc} 
                        alt={work.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                        onError={(e) => { e.target.style.display = 'none'; }} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;