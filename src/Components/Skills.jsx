import React from "react";

const Skills = () => {
  const skills = [
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript (ES6)",
    "Bootstrap",
    "HTML",
    "CSS",
  ];

  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-slate-900 dark:to-slate-950 text-black dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-gray-800 bg-opacity-50 py-4 px-6 rounded-xl shadow-lg hover:shadow-blue-500/100 transition-all duration-300 backdrop-blur-sm border border-blue-500 text-center"
            >
              <span className="text-lg font-medium text-blue-200">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
