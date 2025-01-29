import React from 'react';
import { Github, Linkedin, Mail, Code, Database, Server } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-cyan-500" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Hamza.dev
              </span>
            </div>
            <div className="flex space-x-8 text-cyan-50">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-7xl font-bold mb-6">
            <span className="block text-cyan-50">Python Django</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Developer
            </span>
          </h1>
          <p className="text-xl text-cyan-200 mb-12 max-w-2xl mx-auto">
            Building scalable web applications and RESTful APIs with modern technologies
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#projects" className="px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Featured Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cyan-50 mb-4">Enterprise Resource Planning</h3>
              <p className="text-slate-400 mb-6">
                Comprehensive Django-based ERP system with advanced analytics and real-time reporting.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">Django</span>
                <span className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cyan-50 mb-4">Healthcare API Platform</h3>
              <p className="text-slate-400 mb-6">
                HIPAA-compliant REST API service for medical data management.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">DRF</span>
                <span className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Celery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Technical Skills
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Core Technologies</h3>
              <ul className="space-y-4 text-slate-300">
                <li>Python (Advanced)</li>
                <li>Django & DRF</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-blue-400 mb-6">Development Tools</h3>
              <ul className="space-y-4 text-slate-300">
                <li>Docker & Compose</li>
                <li>Git & GitHub Actions</li>
                <li>Redis & Celery</li>
                <li>Nginx</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-indigo-400 mb-6">Additional Skills</h3>
              <ul className="space-y-4 text-slate-300">
                <li>HTML, CSS & JS</li>
                <li>AWS & DigitalOcean</li>
                <li>Test-Driven Development</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Let's Work Together
            </span>
          </h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:your.email@example.com" 
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>Email</span>
            </a>
            <a href="https://github.com" 
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center">
              <Github className="w-6 h-6 mr-2" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" 
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center">
              <Linkedin className="w-6 h-6 mr-2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">© 2025 Hamza. All rights reserved.</span>
            <a href="#home" className="text-slate-500 hover:text-cyan-400 transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;