import React from 'react';
import Section from './Section';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCES, EDUCATIONS } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-primary-400 mr-2">02.</span> Experience & Education
      </h2>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div>
          <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center">
            <Briefcase className="mr-2 h-5 w-5 text-primary-400" /> Work History
          </h3>
          <div className="space-y-8 relative border-l border-slate-800 ml-3 pl-8 py-2">
            {EXPERIENCES.map((job) => (
              <div key={job.id} className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-primary-500" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-lg font-bold text-slate-100">{job.role}</h4>
                  <span className="text-xs font-mono text-primary-400 bg-primary-500/10 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">
                    {job.period}
                  </span>
                </div>
                <h5 className="text-md text-slate-400 mb-3">{job.company}</h5>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-400 text-sm">
                  {job.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center">
             <span className="text-2xl mr-2">🎓</span> Education
          </h3>
          <div className="space-y-6">
            {EDUCATIONS.map((edu, idx) => (
              <div key={idx} className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-primary-500/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-slate-100">{edu.degree}</h4>
                  <span className="text-xs font-mono text-primary-400 bg-primary-500/10 px-2 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
                <h5 className="text-md text-primary-400 mb-2">{edu.institution}</h5>
                <p className="text-slate-400 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;