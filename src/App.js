// src/App.js
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-5 border-b border-gray-700">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen bg-gray-800 text-center">
        <h2 className="text-4xl font-extrabold">Hi, I'm Chandu Retineni</h2>
        <p className="text-xl mt-4">A Full Stack Developer crafting modern web solutions</p>
        <a href="#projects" className="mt-8 px-6 py-3 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
          View My Work
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10">
        <h3 className="text-3xl font-semibold text-center mb-8">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/300" alt="Project 1" className="rounded-lg mb-4" />
            <h4 className="text-xl font-bold">Project 1</h4>
            <p className="mt-2">A brief description of the project.</p>
            <a href="#" className="text-blue-500 hover:underline mt-4 block">View Details</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-800 p-10">
        <h3 className="text-3xl font-semibold text-center mb-8">About Me</h3>
        <p className="text-center max-w-3xl mx-auto">
          I'm a developer with a passion for creating efficient and scalable applications.
          Skilled in React, Tailwind, and modern web technologies.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10">
        <h3 className="text-3xl font-semibold text-center mb-8">Contact</h3>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Name" className="w-full p-3 bg-gray-700 rounded-lg mb-4" />
          <input type="email" placeholder="Email" className="w-full p-3 bg-gray-700 rounded-lg mb-4" />
          <textarea placeholder="Message" className="w-full p-3 bg-gray-700 rounded-lg mb-4" rows="4"></textarea>
          <button className="w-full bg-blue-500 py-3 rounded-lg hover:bg-blue-600">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center border-t border-gray-700">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
