import React, { useState, useEffect } from 'react';
import "./Header.css"
import Resume from "../assests/Kishan_MernStack_Resume.pdf"

const roles = [
  'Full Stack Developer',
  'React Developer',
  'Frontend Developer',
  'Backend Developer'
];

const Profile = () => {
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentRole(prevRole => {
          const currentIndex = roles.indexOf(prevRole);
          return roles[(currentIndex + 1) % roles.length];
        });
        setTransitioning(false);
      }, 500); // Duration of the transition
    }, 3000); // Duration to show each role

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="profile" className="bg-gradient-to-b from-gray-900 to-gray-900 dark:from-slate-900 dark:to-slate-950 p-6 text-white dark:text-gray-100 flex flex-col items-center">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-semibold mb-2 animate-fade-in">Kishan Rai</h1>
        <h2 className={`font-bold text-2xl md:text-4xl mt-1 gradient-text ${transitioning ? 'fade-out' : 'fade-in'}`}>
          {currentRole}
        </h2>
      </div>
      <div className="text-center mb-8">
        <img 
          src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg" 
          alt="Profile" 
          className="rounded-full w-40 h-40 mx-auto mb-4 shadow-lg transform transition-transform duration-500 hover:scale-105 animate-zoom-in" 
        />
        <p className="text-lg md:text-xl text-gray-200 w-[90%] md:w-[70%] mx-auto animate-fade-in">
        Passionate MERN Stack Developer with strong foundational knowledge in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in developing efficient backend systems, designing RESTful APIs, and creating responsive, user-friendly interfaces. Experienced with Git for version control and skilled in deploying applications on platforms like Render and Vercel. A fast learner, continuously enhancing technical skills by working on real-world projects and staying updated with the latest trends in web development.
        </p>
      </div>
      <a href={Resume} download target='_blank' className="bg-blue-600 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
        Download Resume
      </a>
    </section>
  );
};

export default Profile;

