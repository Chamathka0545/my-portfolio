import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Home.css'; 

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0f0720] px-6 md:px-20 pt-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6 text-left order-2 md:order-1">
          <h3 className="text-2xl font-bold text-white">Hello, I'm</h3>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">
            Dewni Chamathka
          </h1>
          <h2 className="text-1xl md:text-3xl font-bold text-purple-400 uppercase">
            Frontend Developer
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
            A passionate developer skilled in building modern frontend architectures. Turning ideas into real-world applications.
          </p>

          <div className="flex space-x-6 pt-2">
            {[
              { icon: <FaGithub />, link: "https://github.com/Chamathka045" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/dewni-chamathka-weerarathna-071480307/" },
              { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61580699910268" }
            ].map((social, index) => (
              <a key={index} href={social.link} className="text-2xl text-white hover:text-purple-500 hover:scale-125 transition-all duration-300">
                {social.icon}
              </a>
            ))}
          </div>

          <div className="pt-4">
            <a href="/CV_Dewni_Chamathka_IT_Professional.pdf" download="Dewni_Chamathka_CV.pdf" className="inline-block bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-700 hover:text-white font-bold px-8 py-3 rounded-full transition duration-300">
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="avatar-wrapper">
             <img 
               src="/images/dewni-image.png" 
               alt="Profile" 
               className="w-[500px] h-[600px] object-cover rounded-2xl shadow-2xl"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;