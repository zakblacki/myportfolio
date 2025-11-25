import React from 'react';
import Section from './Section';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
        <span className="text-primary-400 mr-2">03.</span> Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <Folder className="w-10 h-10 text-primary-400" />
                <div className="flex space-x-4 z-20">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-4 flex-grow line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-primary-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;