'use client';

import React from 'react';
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="container max-w-7xl mx-auto py-20 px-4 text-gray-600 dark:text-gray-300">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        About Me
      </h1>

      {/* Bio */}
      <section>
        <p className="text-lg max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm a Computer Science and Engineering undergraduate at the University of Moratuwa, 
          currently specializing in Data Science. I'm passionate about solving real-world problems through data 
          and currently seeking a Data Science internship opportunity to apply and grow my skills.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800 dark:text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-white/60 dark:bg-dark/40 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>React / Next.js</li>
              <li>Flutter</li>
              <li>JavaScript / TypeScript</li>
              <li>C / C++ / Python</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white/60 dark:bg-dark/40 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Backend</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Spring Boot</li>
              <li>FastAPI</li>
              <li>MySQL / MongoDB</li>
              <li>Dart</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white/60 dark:bg-dark/40 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Software & Tools</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>GitHub</li>
              <li>ClickUp</li>
              <li>MATLAB</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800 dark:text-white">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white/60 dark:bg-dark/40 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-1">Instructor Member</h3>
            <p className="text-primary text-sm mb-3">
              Syzygy Higher Education · July 2022 – November 2022
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>Assisted in conducting academic sessions and workshops.</li>
              <li>Gained hands-on experience in teaching and mentoring.</li>
              <li>Recognized for strong communication and leadership skills.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
