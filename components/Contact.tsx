import React from 'react';
import Section from './Section';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="text-center py-32">
      <span className="text-primary-400 font-mono text-sm mb-4 block">05. What's Next?</span>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
      <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">
        I am currently looking for new opportunities as a DevOps Engineer. 
        Whether you have a question or just want to say hi, my inbox is always open.
      </p>

      <div className="flex justify-center gap-6 mb-12">
        <a 
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-400 hover:bg-primary-500/10 rounded-md transition-colors"
        >
          <Mail className="mr-2 h-5 w-5" />
          Say Hello
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left max-w-4xl mx-auto border-t border-slate-800 pt-12">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center text-slate-200 mb-2">
            <Phone className="w-4 h-4 mr-2 text-primary-500" />
            <span className="font-semibold">Phone</span>
          </div>
          <a href={`tel:${PROFILE.phone}`} className="text-slate-400 hover:text-primary-400 transition-colors block">
            {PROFILE.phoneDisplay}
          </a>
          {PROFILE.phone2 && (
            <a href={`tel:${PROFILE.phone2}`} className="text-slate-400 hover:text-primary-400 transition-colors block mt-1">
              {PROFILE.phoneDisplay2}
            </a>
          )}
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center text-slate-200 mb-2">
            <Mail className="w-4 h-4 mr-2 text-primary-500" />
            <span className="font-semibold">Email</span>
          </div>
          <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-primary-400 transition-colors">
            {PROFILE.email}
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start">
           <div className="flex items-center text-slate-200 mb-2">
            <MapPin className="w-4 h-4 mr-2 text-primary-500" />
            <span className="font-semibold">Location</span>
          </div>
          <p className="text-slate-400">{PROFILE.location}</p>
        </div>
      </div>

      <div className="mt-20 text-slate-500 text-sm">
        <div className="flex justify-center space-x-6 mb-4">
             <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
               <Github size={20} />
             </a>
             <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
               <Linkedin size={20} />
             </a>
        </div>
        <p>Designed & Built by {PROFILE.name}</p>
      </div>
    </Section>
  );
};

export default Contact;