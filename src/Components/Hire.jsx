import React from "react";
import { motion } from "framer-motion";
import Resume from "../assests/KishanMernStackResume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Hire = () => {
  return (
    <section
      id="hire-me"
      className="bg-gradient-to-b from-white to-gray-100 dark:from-slate-900 dark:to-slate-950 text-black dark:text-gray-100 py-20 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold mb-4 text-blue-300">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Passionate MERN Stack Developer ready to bring your ideas to life.
            Let's create an exceptional web experience together.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.a
            href="mailto:raik55488@gmail.com"
            className="bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
            Send a Message
          </motion.a>

          <motion.a
            href={Resume}
            download
            className="bg-gray-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FontAwesomeIcon icon={faFilePdf} className="mr-3" />
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hire;
