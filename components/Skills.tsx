import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../constants';
import { CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-slate-900/30">
      <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
        <span className="text-primary-400 mr-2">04.</span> Skills & Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-slate-200 mb-4 border-b border-slate-800 pb-2">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-slate-800 text-primary-200 text-sm rounded-md border border-slate-700 hover:border-primary-500/50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl h-fit">
          <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center">
            <span className="text-2xl mr-2">📜</span> Certifications
          </h3>
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-slate-200 font-medium">{cert.name}</h4>
                  <span className="text-sm text-slate-500 font-mono">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;