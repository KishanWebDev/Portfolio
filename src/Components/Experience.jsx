import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Node.js Backend Developer',
    company: 'Cadin360',
    duration: '08/2025 – Present',
    location: 'Delhi, India',
    bullets: [
      'Developing and maintaining backend APIs for a multi-vendor e-commerce platform.',
      'Managing Hetzner VPS deployments and automation.',
      'Implementing features like authentication and payment integration.',
      'Working with the team to deliver scalable product features.',
    ],
  },
  {
    role: 'Node.js Backend Developer Intern',
    company: 'Cadin360',
    duration: '05/2025 – 08/2025',
    location: 'Delhi, India',
    bullets: [
      'Assisted in developing a multi-vendor e-commerce platform for digital file delivery.',
      'Built backend APIs using Node.js and Express.js.',
      'Integrated PayPal for secure payments.',
      'Helped deploy the project on Hetzner VPS and set up automation.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-b from-gray-900 to-gray-900 dark:from-slate-900 dark:to-slate-950 text-white dark:text-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-300 dark:text-blue-400">Professional Experience</h2>
        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-blue-500/10 dark:bg-slate-800 dark:bg-opacity-50 dark:border-blue-400/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-300 dark:text-blue-400">{job.role}</h3>
                  <p className="text-xl text-gray-200 dark:text-gray-300 mt-1">{job.company}</p>
                </div>
                <div className="text-left md:text-right mt-2 md:mt-0">
                  <p className="text-md font-semibold text-gray-400 dark:text-gray-400">{job.duration}</p>
                  <p className="text-sm text-gray-400 dark:text-gray-400">{job.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 dark:text-gray-300">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;