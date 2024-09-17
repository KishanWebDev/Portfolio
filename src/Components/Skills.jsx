
// import React from 'react';
// import './Header.css';

// const Skills = () => {
//   return (
//     <section id="skills" className="p-8 bg-gradient-to-r from-black to-black text-white flex flex-col justify-center items-center">
//       <h2 className="text-4xl font-extrabold mb-8 animate-fade-in">Skills</h2>
//       <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full md:w-3/4">
//         {['React','Node', 'Express','MongoDB','Tailwind CSS', 'JavaScript (ES6)', 'Bootstrap', 'HTML', 'CSS', ].map(skill => (
//           <li key={skill} className="border-2 border-gray-700 py-3 px-6 bg-gray-700 bg-opacity-80 hover:bg-gray-600 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in">
//             {skill}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Skills;
import React from 'react';

const Skills = () => {
  const skills = [
    'React', 'Node', 'Express', 'MongoDB', 'Tailwind CSS', 
    'JavaScript (ES6)', 'Bootstrap', 'HTML', 'CSS'
  ];

  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 bg-opacity-50 py-4 px-6 rounded-xl shadow-lg hover:shadow-blue-500/100 transition-all duration-300 backdrop-blur-sm border border-blue-500 text-center"
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