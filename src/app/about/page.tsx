'use client';

import React from 'react';
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import Contact from '../contact/Contact';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-700 px-6 md:px-12 py-20">
      {/* Main container with white background and shadow */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl p-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900 tracking-wide animate-fadeIn">
          About Me
        </h1>

        {/* Bio */}
        <section className="max-w-4xl mx-auto mb-20 animate-fadeIn delay-100">
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto text-gray-800">
            I'm a Computer Science and Engineering undergraduate at the University of Moratuwa, 
            specializing in Data Science. Passionate about solving real-world problems through data, I am seeking 
            a Data Science internship opportunity to apply and grow my skills.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-24 animate-fadeIn delay-200">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-gray-900 tracking-tight">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Frontend */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-default p-8">
              <FaCode className="h-10 w-10 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-5 text-gray-900">Frontend</h3>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                <li>React / Next.js</li>
                <li>Flutter</li>
                <li>JavaScript / TypeScript</li>
                <li>C / C++ / Python</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-default p-8">
              <FaLaptopCode className="h-10 w-10 text-green-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-5 text-gray-900">Backend</h3>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                <li>Spring Boot</li>
                <li>FastAPI</li>
                <li>MySQL / MongoDB</li>
                <li>Dart</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-default p-8">
              <FaGraduationCap className="h-10 w-10 text-purple-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-5 text-gray-900">Software & Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                <li>GitHub</li>
                <li>ClickUp</li>
                <li>MATLAB</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="max-w-4xl mx-auto mb-24 animate-fadeIn delay-300">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-gray-900 tracking-tight">
            Experience
          </h2>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default p-8">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Instructor Member</h3>
            <p className="text-blue-600 text-sm mb-6 font-medium">
              Syzygy Higher Education · July 2022 – November 2022
            </p>
            <ul className="list-disc list-inside space-y-3 text-base text-gray-700">
              <li>Assisted in conducting academic sessions and workshops.</li>
              <li>Gained hands-on experience in teaching and mentoring.</li>
              <li>Recognized for strong communication and leadership skills.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="max-w-4xl mx-auto mb-24 animate-fadeIn delay-400">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-gray-900 tracking-tight">
            Education
          </h2>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default space-y-6 p-8">
            <div>
              <h3 className="text-2xl font-semibold mb-1 text-gray-900">
                BSc (Hons) Engineering, University of Moratuwa
              </h3>
              <p className="text-blue-600 text-sm font-medium">
                May 2022 - Present
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-1 text-gray-900">
                GCE A/L & O/L, St. Joseph's College
              </h3>
              <p className="text-blue-600 text-sm font-medium">
                July 2007 - November 2022
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease forwards;
          opacity: 0;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
