import React from "react";
import passop from "../assests/passop.jpg";
import ecommerce from "../assests/ecommerce.jpg";
import studysync from "../assests/studysync.jpg";
import myntra from "../assests/myntra.jpg";
import youtube from "../assests/youtube.jpg";

function Projects() {
  const projects = [
    {
      title: "YouTube Backend",
      image: youtube,
      description: "YouTube Backend: A project that integrates YouTube functionalities with Twitter's tweet features.",
      features: [
        "Comprehensive user management system with registration, authentication, and profile customization.",
        "Video hosting capabilities including upload, search, and visibility control, mirroring core YouTube functionalities.",
        "Integrated tweet system allowing users to create, view, and manage tweets within the platform.",
        "Robust engagement features including subscriptions, likes, comments, and playlist management.",
        "Backend built with Node.js, Express.js, and MongoDB, with cloud-based media storage using Cloudinary."
      ],
      liveLink: "https://youtube-frontend-dusky.vercel.app/",
      sourceLink: "https://github.com/KishanWebDev/Youtube-Backend",
    },
    {
      title: "Myntra-Clone",
      image: myntra,
      description: "Myntra React Clone: E-Commerce App with React Router, Redux, and Bootstrap",
      features: [
        "E-Commerce application built with React Router for seamless navigation.",
        "State management handled using Redux for efficient data flow.",
        "Backend data fetching to display product information dynamically.",
        "Bootstrap used for responsive and consistent styling across the application.",
        "Smooth and user-friendly interface for a shopping experience similar to Myntra."
      ],
      liveLink: "https://myntra-clone-kappa-teal.vercel.app/",
      sourceLink: "https://github.com/KishanWebDev/Myntra-Clone",
    },
    {
      title: "PassOP",
      image: passop,
      description: "PassOP: A Secure Password Manager",
      features: [
        "Secure password management with CRUD functionalities: save, update, and delete passwords.",
        "React hooks used for efficient state management and handling side effects.",
        "Persistent data storage through localStorage to retain user passwords.",
        "Tailwind CSS for responsive and modern UI styling.",
        "Real-time notifications using react-toastify for user feedback."
      ],
      liveLink: "https://pass-op-omega.vercel.app/",
      sourceLink: "https://github.com/KishanWebDev/PassOP",
    },
    {
      title: "E-Commerce-Website",
      image: ecommerce,
      description: "This is a E-commerce Website made by using HTML, CSS and JavaScript.",
      features: [
        "Responsive design and accessibility-focused web development using HTML, CSS, and JavaScript.",
        "Product listing and filtering for a smooth browsing experience.",
        "User authentication to securely register, log in, and manage user accounts.",
        "Shopping cart functionality allowing users to add, update, and remove products.",
        "Checkout process enabling secure transactions for product purchases."
      ],
      liveLink: "https://e-commerce-website-nu-gray.vercel.app/",
      sourceLink: "https://github.com/KishanWebDev/E-Commerce-Website",
    },
    {
      title: "StudySyncWebsite",
      image: studysync,
      description: "HTML5 & CSS3 Main Project.",
      features: [
        "Dynamic and responsive website development for StudySync, an educational platform.",
        "Showcasing platform features, benefits, and user testimonials.",
        "Advanced CSS techniques like flexbox and grid for a visually appealing and user-friendly interface.",
        "Smooth and adaptive design ensuring a seamless user experience across devices.",
      ],
      liveLink: "https://study-sync-website.vercel.app/",
      sourceLink: "https://github.com/KishanWebDev/StudySyncWebsite",
    },

  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Projects</h2>
      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/100 transition-all duration-300 backdrop-blur-sm border border-blue-500/10">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-300 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-300 mb-4">{project.description}</p>
                  <ul className="list-none space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">View Project</button>
                  </a>
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300">Source Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;