/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'about', title: 'ABOUT_ME', icon: 'person', slot: 'SLOT_01' },
  { id: 'projects', title: 'PROJECTS', icon: 'folder_open', slot: 'SLOT_02' },
  { id: 'skills', title: 'SKILLS', icon: 'terminal', slot: 'SLOT_03' },
  { id: 'experience', title: 'EXPERIENCE', icon: 'work', slot: 'SLOT_04' },
  { id: 'contact', title: 'CONTACT', icon: 'mail', slot: 'SLOT_05' },
];

function AboutSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-primary/40 pb-6 mb-8 gap-4">
        <div>
          <h2 className="text-primary text-xl md:text-3xl mb-1 tracking-widest">USER_PROFILE</h2>
          <div className="text-primary/90 text-sm md:text-base mb-3 font-bold tracking-widest uppercase">Sebastian Caballero</div>
          <div className="bg-primary text-black px-3 py-1 inline-block text-[10px]">STATUS: GRAPHIC_DESIGNER</div>
        </div>
        <div className="text-left md:text-right text-primary/70 text-[10px] leading-relaxed">
            LOCATION: COLOMBIA<br/>
            CLASS: DESIGNER<br/>
            V_SYNC: ACTIVE
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
        <div className="w-56 h-56 bg-black pixel-border-sm border-4 border-primary/60 p-2 flex items-center justify-center shrink-0">
          <div className="relative w-full h-full bg-[#111] flex items-center justify-center overflow-hidden">
             <img src="/perfil.jpg?v=3" alt="User Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <div className="bg-black/80 p-5 pixel-border-inset border-2 border-primary/30">
            <p className="text-xs text-primary leading-loose">
                &gt; ACCESSING BIO_DATA...<br/>
                &gt; GRAPHIC DESIGNER DETECTED.<br/>
                &gt; SPECIALIZING IN VISUAL IDENTITY & EDITORIAL.<br/>
                &gt; VICTORIAN & MINIMALIST AESTHETICS.<br/>
                &gt; WAITING FOR COMMAND...
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-black p-3 border-l-8 border-primary">
              <div className="text-[10px] text-primary/60 mb-2">VISUAL_IDENTITY</div>
              <div className="text-primary text-lg">95%</div>
            </div>
            <div className="bg-black p-3 border-l-8 border-primary">
              <div className="text-[10px] text-primary/60 mb-2">EDITORIAL_DESIGN</div>
              <div className="text-primary text-lg">90%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto flex justify-between items-center text-primary/60 text-[10px]">
        <div className="flex gap-6">
          <span>[A] SELECT</span>
          <span>[B] BACK</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-600 animate-pulse rounded-full"></span>
          <span>RECORDING_DATA...</span>
        </div>
      </div>
    </>
  );
}

function ProjectsSection() {
  const projects = [
    { name: 'CYBER_SHOP', type: 'E-COMMERCE', status: 'COMPLETED' },
    { name: 'NEON_DASHBOARD', type: 'ANALYTICS', status: 'V1.2' },
    { name: 'RETRO_PORTFOLIO', type: 'WEB_APP', status: 'ACTIVE' },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-primary/40 pb-6 mb-8 gap-4">
        <div>
          <h2 className="text-primary text-xl md:text-3xl mb-3 tracking-widest">PROJECT_ARCHIVE</h2>
          <div className="bg-primary text-black px-3 py-1 inline-block text-[10px]">ACCESS_LEVEL: PUBLIC</div>
        </div>
        <div className="text-left md:text-right text-primary/70 text-[10px] leading-relaxed">
            RECORDS: {projects.length}<br/>
            SORT: CHRONOLOGICAL
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        {projects.map((p, i) => (
          <div key={i} className="bg-black/80 p-4 pixel-border-inset border-2 border-primary/30 flex justify-between items-center hover:bg-primary/10 cursor-pointer transition-colors">
            <div className="flex items-center gap-4">
              <span className="text-primary text-sm">{`0${i + 1}`}</span>
              <div>
                <div className="text-primary text-sm mb-1">{p.name}</div>
                <div className="text-primary/60 text-[10px]">TYPE: {p.type}</div>
              </div>
            </div>
            <div className="text-[10px] text-primary bg-primary/20 px-2 py-1">
              {p.status}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-between items-center text-primary/60 text-[10px] pt-4">
        <div className="flex gap-6">
          <span>[ENTER] LAUNCH</span>
          <span>[ESC] BACK</span>
        </div>
      </div>
    </>
  );
}

function SkillsSection() {
  const skills = [
    { name: 'JAVASCRIPT', level: 90 },
    { name: 'TYPESCRIPT', level: 85 },
    { name: 'REACT', level: 95 },
    { name: 'NODE.JS', level: 75 },
    { name: 'CSS/TAILWIND', level: 88 },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-primary/40 pb-6 mb-8 gap-4">
        <div>
          <h2 className="text-primary text-xl md:text-3xl mb-3 tracking-widest">SKILL_MATRIX</h2>
          <div className="bg-primary text-black px-3 py-1 inline-block text-[10px]">MODE: ANALYSIS</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex justify-between text-xs text-primary">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-4 bg-black pixel-border-inset border border-primary/30 p-[2px]">
              <div 
                className="h-full bg-primary"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ExperienceSection() {
  const exp = [
    { year: '2023-PRES', role: 'SENIOR_DEV', corp: 'TECH_CORP_INC' },
    { year: '2020-2023', role: 'WEB_ENGINEER', corp: 'STARTUP_X' },
    { year: '2018-2020', role: 'JUNIOR_CODER', corp: 'AGENCY_ZERO' },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-primary/40 pb-6 mb-8 gap-4">
        <div>
          <h2 className="text-primary text-xl md:text-3xl mb-3 tracking-widest">WORK_HISTORY</h2>
          <div className="bg-primary text-black px-3 py-1 inline-block text-[10px]">LOG: DECRYPTED</div>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="absolute left-[7px] top-0 bottom-0 w-1 bg-primary/30"></div>
        <div className="flex flex-col gap-8 relative z-10">
          {exp.map((item, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute left-0 top-1 w-4 h-4 bg-black border-2 border-primary rounded-full z-10"></div>
              <div className="bg-black/80 p-4 pixel-border-inset border-2 border-primary/30">
                <div className="text-[10px] text-primary/60 mb-2">{item.year}</div>
                <div className="text-primary text-sm mb-1">{item.role}</div>
                <div className="text-primary/80 text-xs">{item.corp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ContactSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-primary/40 pb-6 mb-8 gap-4">
        <div>
          <h2 className="text-primary text-xl md:text-3xl mb-3 tracking-widest">COMMS_LINK</h2>
          <div className="bg-primary text-black px-3 py-1 inline-block text-[10px]">STATUS: SECURE_CHANNEL</div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-black/80 p-8 pixel-border-inset border-2 border-primary/30 w-full max-w-md">
          <p className="text-xs text-primary leading-loose mb-8 text-center">
              &gt; INITIATING CONNECTION...<br/>
              &gt; PLEASE SELECT A COMMUNICATION PROTOCOL:
          </p>
          <div className="flex flex-col gap-4">
            <button onClick={() => window.alert('OPEN THE DETAILED VIEW TO TRANSMIT MESSAGE')} className="w-full bg-surface-light text-black hover:bg-primary p-4 pixel-border-sm flex items-center justify-center gap-4 transition-colors">
              <span className="material-symbols-outlined">mail</span>
              <span className="text-xs font-bold">TRANSMIT_MESSAGE</span>
            </button>
            <button className="w-full bg-surface-light text-black hover:bg-primary p-4 pixel-border-sm flex items-center justify-center gap-4 transition-colors">
              <span className="material-symbols-outlined">code</span>
              <span className="text-xs font-bold">GITHUB_REPO</span>
            </button>
            <button className="w-full bg-surface-light text-black hover:bg-primary p-4 pixel-border-sm flex items-center justify-center gap-4 transition-colors">
              <span className="material-symbols-outlined">work</span>
              <span className="text-xs font-bold">LINKEDIN_PROFILE</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function DetailedAbout({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 border-primary/40 pb-4 mb-6 gap-4">
        <div>
          <h2 className="text-primary text-lg md:text-2xl mb-1 tracking-widest">USER_PROFILE // DETAILED</h2>
          <div className="text-primary/90 text-sm mb-2 font-bold tracking-widest uppercase">Sebastian Caballero</div>
          <div className="bg-primary text-black px-2 py-1 inline-block text-[10px]">STATUS: GRAPHIC_DESIGNER</div>
        </div>
        <button onClick={onBack} className="text-primary hover:text-white text-xs bg-black border-2 border-primary px-3 py-1 hover:bg-primary transition-colors shrink-0">
          [ESC] RETURN
        </button>
      </div>
      <div className="flex-1 overflow-y-auto space-y-6 pr-2">
        <div className="bg-black/80 p-5 pixel-border-inset border-2 border-primary/30">
          <h3 className="text-primary text-lg mb-4 border-b-2 border-primary/30 pb-2">BIOGRAPHY</h3>
          <p className="text-xs text-primary/80 leading-loose">
            I am a graphic designer with a comprehensive approach that combines creativity, technical skill, and conceptual thinking to develop strong and cohesive visual solutions. My work focuses on visual identity design, editorial design, and the creation of graphic pieces that communicate clearly and effectively, always maintaining a balance between aesthetics and functionality.
          </p>
        </div>
        <div className="bg-black/80 p-5 pixel-border-inset border-2 border-primary/30">
          <h3 className="text-primary text-lg mb-4 border-b-2 border-primary/30 pb-2">EDUCATION</h3>
          <ul className="text-xs text-primary/80 leading-loose space-y-2">
            <li>&gt; BACHELOR'S DEGREE IN GRAPHIC DESIGN</li>
            <li>&gt; UNICESMAG UNIVERSITY - PASTO, COLOMBIA</li>
            <li>&gt; FOCUS ON VISUAL COMMUNICATION & CONCEPTUAL THINKING</li>
          </ul>
        </div>
        <div className="bg-black/80 p-5 pixel-border-inset border-2 border-primary/30">
          <h3 className="text-primary text-lg mb-4 border-b-2 border-primary/30 pb-2">HOBBIES & INTERESTS</h3>
          <p className="text-xs text-primary/80 leading-loose">
            I have a strong interest in visual exploration and artistic experimentation, particularly in styles such as Victorian aesthetics, minimalism, and dark or atmospheric design. I am also interested in digital illustration and generative design, experimenting with tools like Processing to create interactive and data-driven visuals.
          </p>
        </div>
      </div>
    </div>
  );
}

function DetailedProjects({ onBack }: { onBack: () => void }) {
  const projects = [
    { name: 'CYBER_SHOP', type: 'E-COMMERCE', status: 'COMPLETED', desc: 'A fully functional e-commerce platform with a cyberpunk aesthetic. Features include user authentication, product catalog, shopping cart, and Stripe payment integration.', tech: 'React, Node.js, Express, MongoDB, Stripe' },
    { name: 'NEON_DASHBOARD', type: 'ANALYTICS', status: 'V1.2', desc: 'A real-time analytics dashboard for monitoring server health and traffic. Utilizes WebSockets for live data updates and D3.js for interactive data visualization.', tech: 'Vue.js, Python, FastAPI, WebSockets, D3.js' },
    { name: 'RETRO_PORTFOLIO', type: 'WEB_APP', status: 'ACTIVE', desc: 'This very portfolio! Designed to mimic the look and feel of an 8-bit operating system. Built with modern web technologies while maintaining a strict retro design language.', tech: 'React, Tailwind CSS, Framer Motion' },
  ];

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 border-primary/40 pb-4 mb-6 gap-4">
        <div>
          <h2 className="text-primary text-lg md:text-2xl mb-2 tracking-widest">PROJECT_ARCHIVE // DETAILED</h2>
          <div className="bg-primary text-black px-2 py-1 inline-block text-[10px]">ACCESS_LEVEL: PUBLIC</div>
        </div>
        <button onClick={onBack} className="text-primary hover:text-white text-xs bg-black border-2 border-primary px-3 py-1 hover:bg-primary transition-colors shrink-0">
          [ESC] RETURN
        </button>
      </div>
      <div className="flex-1 overflow-y-auto space-y-6 pr-2">
        {projects.map((p, i) => (
          <div key={i} className="bg-black/80 p-5 pixel-border-inset border-2 border-primary/30">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-primary text-xl">{p.name}</h3>
              <span className="text-[10px] text-primary bg-primary/20 px-2 py-1">{p.status}</span>
            </div>
            <p className="text-xs text-primary/80 leading-loose mb-4">{p.desc}</p>
            <div className="text-[10px] text-primary/60 border-t border-primary/30 pt-2">
              <span className="text-primary">TECH_STACK:</span> {p.tech}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailedSkills({ onBack }: { onBack: () => void }) {
  const skillCategories = [
    {
      title: 'LANGUAGES',
      skills: [
        { name: 'JAVASCRIPT (ES6+)', level: 90 },
        { name: 'TYPESCRIPT', level: 85 },
        { name: 'PYTHON', level: 70 },
        { name: 'HTML5 / CSS3', level: 95 },
      ]
    },
    {
      title: 'FRAMEWORKS & LIBRARIES',
      skills: [
        { name: 'REACT / NEXT.JS', level: 95 },
        { name: 'NODE.JS / EXPRESS', level: 80 },
        { name: 'TAILWIND CSS', level: 90 },
        { name: 'THREE.JS', level: 60 },
      ]
    },
    {
      title: 'TOOLS & DATABASES',
      skills: [
        { name: 'GIT / GITHUB', level: 88 },
        { name: 'MONGODB', level: 75 },
        { name: 'POSTGRESQL', level: 70 },
        { name: 'DOCKER', level: 65 },
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 border-primary/40 pb-4 mb-6 gap-4">
        <div>
          <h2 className="text-primary text-lg md:text-2xl mb-2 tracking-widest">SKILL_MATRIX // DETAILED</h2>
          <div className="bg-primary text-black px-2 py-1 inline-block text-[10px]">MODE: DEEP_ANALYSIS</div>
        </div>
        <button onClick={onBack} className="text-primary hover:text-white text-xs bg-black border-2 border-primary px-3 py-1 hover:bg-primary transition-colors shrink-0">
          [ESC] RETURN
        </button>
      </div>
      <div className="flex-1 overflow-y-auto space-y-8 pr-2">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-black/80 p-5 pixel-border-inset border-2 border-primary/30">
            <h3 className="text-primary text-lg mb-4 border-b-2 border-primary/30 pb-2">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs text-primary/80">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-black pixel-border-inset border border-primary/30 p-[2px]">
                    <div 
                      className="h-full bg-primary"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailedExperience({ onBack }: { onBack: () => void }) {
  const exp = [
    { year: '2023-PRESENT', role: 'SENIOR FRONTEND DEVELOPER', corp: 'TECH_CORP_INC', desc: 'Lead the frontend development team in migrating a legacy monolithic application to a modern React-based micro-frontend architecture. Improved overall application performance by 40% and established new coding standards and CI/CD pipelines.' },
    { year: '2020-2023', role: 'WEB ENGINEER', corp: 'STARTUP_X', desc: 'Developed and maintained multiple client-facing web applications using React and Node.js. Collaborated closely with UI/UX designers to implement pixel-perfect, responsive designs. Integrated third-party APIs for payment processing and geolocation services.' },
    { year: '2018-2020', role: 'JUNIOR WEB DEVELOPER', corp: 'AGENCY_ZERO', desc: 'Assisted in the development of various marketing websites and landing pages. Gained strong foundational skills in HTML, CSS, JavaScript, and responsive design principles. Participated in daily stand-ups and agile development processes.' },
  ];

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 border-primary/40 pb-4 mb-6 gap-4">
        <div>
          <h2 className="text-primary text-lg md:text-2xl mb-2 tracking-widest">WORK_HISTORY // DETAILED</h2>
          <div className="bg-primary text-black px-2 py-1 inline-block text-[10px]">LOG: FULL_DECRYPTION</div>
        </div>
        <button onClick={onBack} className="text-primary hover:text-white text-xs bg-black border-2 border-primary px-3 py-1 hover:bg-primary transition-colors shrink-0">
          [ESC] RETURN
        </button>
      </div>
      <div className="flex-1 overflow-y-auto pr-2 relative">
        <div className="absolute left-[11px] top-0 bottom-0 w-1 bg-primary/30"></div>
        <div className="flex flex-col gap-8 relative z-10">
          {exp.map((item, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute left-0 top-2 w-6 h-6 bg-black border-2 border-primary rounded-full z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="bg-black/80 p-5 pixel-border-inset border-2 border-primary/30">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-primary text-lg">{item.role}</div>
                  <div className="text-[10px] text-primary/60 bg-primary/10 px-2 py-1">{item.year}</div>
                </div>
                <div className="text-primary/80 text-xs mb-4 font-bold">@ {item.corp}</div>
                <p className="text-xs text-primary/70 leading-loose">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailedContact({ onBack }: { onBack: () => void }) {
  const [formStatus, setFormStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('SENDING');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    fetch("https://formsubmit.co/ajax/sebastiancaballero036@gmail.com", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === "true") {
          setFormStatus('SUCCESS');
          form.reset();
        } else {
          setFormStatus('ERROR');
        }
      })
      .catch(() => {
        setFormStatus('ERROR');
      });
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 border-primary/40 pb-4 mb-6 gap-4">
        <div>
          <h2 className="text-primary text-lg md:text-2xl mb-2 tracking-widest">COMMS_LINK // DETAILED</h2>
          <div className="bg-primary text-black px-2 py-1 inline-block text-[10px]">STATUS: ENCRYPTED_CHANNEL</div>
        </div>
        <button onClick={onBack} className="text-primary hover:text-white text-xs bg-black border-2 border-primary px-3 py-1 hover:bg-primary transition-colors shrink-0">
          [ESC] RETURN
        </button>
      </div>
      <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-6">
        <div className="bg-black/80 p-5 pixel-border-inset border-2 border-primary/30">
          <h3 className="text-primary text-lg mb-4 border-b-2 border-primary/30 pb-2">TRANSMIT_MESSAGE</h3>
          
          {formStatus === 'SUCCESS' ? (
            <div className="text-primary text-center p-8 border-2 border-primary/50 bg-primary/10">
              <span className="material-symbols-outlined text-4xl mb-4">check_circle</span>
              <p className="font-bold tracking-widest">TRANSMISSION SUCCESSFUL</p>
              <p className="text-xs text-primary/70 mt-2">MESSAGE DELIVERED TO RECIPIENT</p>
              <button onClick={() => setFormStatus('IDLE')} className="mt-6 border-2 border-primary px-4 py-2 text-xs hover:bg-primary hover:text-black transition-colors">
                SEND_ANOTHER
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <div>
                <label className="block text-[10px] text-primary/80 mb-1">SENDER_ID (NAME)</label>
                <input type="text" name="name" required disabled={formStatus === 'SENDING'} className="w-full bg-black border-2 border-primary/50 text-primary p-2 text-xs focus:outline-none focus:border-primary disabled:opacity-50" placeholder="ENTER NAME..." />
              </div>
              <div>
                <label className="block text-[10px] text-primary/80 mb-1">RETURN_ADDRESS (EMAIL)</label>
                <input type="email" name="email" required disabled={formStatus === 'SENDING'} className="w-full bg-black border-2 border-primary/50 text-primary p-2 text-xs focus:outline-none focus:border-primary disabled:opacity-50" placeholder="ENTER EMAIL..." />
              </div>
              <div>
                <label className="block text-[10px] text-primary/80 mb-1">PAYLOAD (MESSAGE)</label>
                <textarea name="message" required disabled={formStatus === 'SENDING'} className="w-full bg-black border-2 border-primary/50 text-primary p-2 text-xs focus:outline-none focus:border-primary h-24 resize-none disabled:opacity-50" placeholder="ENTER MESSAGE..."></textarea>
              </div>
              
              {formStatus === 'ERROR' && (
                <div className="text-red-500 text-xs text-center border border-red-500/50 p-2">
                  TRANSMISSION FAILED. RETRY LATER.
                </div>
              )}
              
              <button type="submit" disabled={formStatus === 'SENDING'} className="bg-primary text-black px-4 py-2 text-xs font-bold hover:bg-white transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed">
                {formStatus === 'SENDING' ? 'TRANSMITTING...' : 'INITIATE_TRANSFER'}
              </button>
            </form>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/80 p-5 pixel-border-inset border-2 border-primary/30 flex flex-col items-center justify-center text-center gap-2 hover:bg-primary/10 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-3xl text-primary">code</span>
            <div className="text-primary text-sm">GITHUB</div>
            <div className="text-primary/60 text-[10px]">github.com/developer</div>
          </div>
          <div className="bg-black/80 p-5 pixel-border-inset border-2 border-primary/30 flex flex-col items-center justify-center text-center gap-2 hover:bg-primary/10 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-3xl text-primary">work</span>
            <div className="text-primary text-sm">LINKEDIN</div>
            <div className="text-primary/60 text-[10px]">linkedin.com/in/developer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenContent({ sectionId, isExecuting, onBack }: { sectionId: string, isExecuting: boolean, onBack: () => void }) {
  if (isExecuting) {
    switch (sectionId) {
      case 'about': return <DetailedAbout onBack={onBack} />;
      case 'projects': return <DetailedProjects onBack={onBack} />;
      case 'skills': return <DetailedSkills onBack={onBack} />;
      case 'experience': return <DetailedExperience onBack={onBack} />;
      case 'contact': return <DetailedContact onBack={onBack} />;
      default: return <div>UNKNOWN_DATA</div>;
    }
  }

  switch (sectionId) {
    case 'about': return <AboutSection />;
    case 'projects': return <ProjectsSection />;
    case 'skills': return <SkillsSection />;
    case 'experience': return <ExperienceSection />;
    case 'contact': return <ContactSection />;
    default: return <div>UNKNOWN_DATA</div>;
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [powerOn, setPowerOn] = useState(true);
  const [isBooting, setIsBooting] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleReset = () => {
    setIsBooting(true);
    setTimeout(() => setIsBooting(false), 2000);
    setActiveSection(SECTIONS[0].id);
    setIsExecuting(false);
  };

  const handlePower = () => {
    setPowerOn(!powerOn);
    if (powerOn) setIsExecuting(false);
  };

  const handleExecute = () => {
    if (powerOn && !isBooting) {
      setIsExecuting(true);
    }
  };

  const handleBack = () => {
    setIsExecuting(false);
  };

  const activeData = SECTIONS.find(s => s.id === activeSection);

  return (
    <div className="font-pixel text-accent selection:bg-primary selection:text-black flex flex-col min-h-screen p-4 md:p-6 gap-4 md:gap-6 bg-black">
      {/* Header */}
      {!isExecuting && (
        <header className="h-14 flex justify-between items-center px-6 bg-primary text-black pixel-border-thick relative z-30 animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-2xl">videogame_asset</span>
            <h1 className="text-[12px] uppercase tracking-tighter hidden md:block">8-BIT_PORTFOLIO_OS_V1.0</h1>
            <h1 className="text-[12px] uppercase tracking-tighter md:hidden">8-BIT_OS</h1>
          </div>
          <div className="text-[10px] flex gap-4 md:gap-6">
            <span className="animate-pulse">{powerOn ? 'ONLINE' : 'OFFLINE'}</span>
            <span className="hidden md:inline">CORE_TEMP: 42°C</span>
            <span className="hidden md:inline">MEM: 64KB</span>
          </div>
        </header>
      )}

      <div className="flex flex-1 gap-6 md:gap-10 flex-col lg:flex-row">
        {/* Sidebar */}
        {!isExecuting && (
          <aside className="w-full lg:w-80 flex flex-row lg:flex-col gap-5 overflow-x-auto lg:overflow-y-auto lg:pr-4 lg:pb-6 shrink-0 animate-in slide-in-from-left-4 duration-300">
            <div className="bg-surface-light text-black p-3 pixel-border-sm mb-0 lg:mb-4 hidden lg:block shrink-0">
              <h2 className="text-[10px] uppercase text-center">DATA_SHELF [REV_04]</h2>
            </div>
            
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <div 
                  key={section.id}
                  onClick={() => {
                    if (powerOn) {
                      setActiveSection(section.id);
                      setIsExecuting(false);
                    }
                  }}
                  className={`cartridge-slot p-3 md:p-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4 pixel-border-sm cursor-pointer transition-all duration-100 shrink-0 lg:shrink ${isActive ? 'bg-primary text-black lg:translate-x-4' : 'bg-surface-light text-black hover:bg-primary lg:hover:translate-x-2'}`}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-black flex items-center justify-center pixel-border-sm shrink-0">
                    <span className={`material-symbols-outlined text-lg md:text-xl ${isActive ? 'text-primary' : 'text-white'}`}>
                      {section.icon}
                    </span>
                  </div>
                  <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="text-[6px] md:text-[7px]">{section.slot}</span>
                    <span className={`text-[7px] md:text-[9px] ${isActive ? 'font-bold' : ''}`}>{section.title}</span>
                  </div>
                </div>
              );
            })}

            <div className="h-16 border-4 border-dashed border-primary/20 items-center justify-center opacity-40 mt-auto hidden lg:flex shrink-0">
              <span className="text-[8px]">EMPTY_06</span>
            </div>
          </aside>
        )}

        {/* Main Screen */}
        <main className="flex-1 flex flex-col gap-4 min-h-0">
          <div className="crt-screen flex-1 pixel-border-thick border-[10px] md:border-[20px] border-[#222] overflow-y-auto min-h-[50vh] lg:min-h-0">
            {powerOn && <div className="scanline-pulse"></div>}
            
            <div className={`p-6 md:p-10 min-h-full flex flex-col ${powerOn && !isBooting ? 'flicker' : ''}`}>
              {!powerOn ? (
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-primary/30 text-sm">NO SIGNAL</span>
                </div>
              ) : isBooting ? (
                <div className="flex-1 flex flex-col items-start justify-start text-primary text-[10px] leading-loose">
                  <p>BOOTING 8-BIT_OS...</p>
                  <p>LOADING KERNEL...</p>
                  <p>MOUNTING VFS...</p>
                  <p>INITIALIZING GRAPHICS...</p>
                  <p className="animate-pulse mt-4">READY.</p>
                </div>
              ) : (
                <ScreenContent sectionId={activeSection} isExecuting={isExecuting} onBack={handleBack} />
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      {!isExecuting && (
        <footer className="h-24 md:h-28 bg-surface-light text-black pixel-border-thick flex items-center px-4 md:px-10 relative mt-4 shrink-0 animate-in slide-in-from-bottom-4 duration-300">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-6 h-7 bg-black pixel-border-sm flex items-center justify-center">
            <span className="text-[8px] text-primary tracking-widest whitespace-nowrap">CONSOLE_CORE_V1.1</span>
          </div>
          <div className="flex-1 flex gap-4 md:gap-10 justify-center items-center overflow-x-auto scrollbar-hide">
            <button onClick={handleExecute} className="flex flex-col items-center gap-2 group shrink-0">
              <div className="w-28 h-10 md:w-40 md:h-14 bg-black text-primary flex items-center justify-center gap-2 pixel-border-sm group-active:translate-y-2 transition-transform px-4">
                <span className="material-symbols-outlined text-xl md:text-2xl">play_arrow</span>
                <span className="text-[10px] md:text-xs font-bold tracking-widest hidden sm:inline-block">EXECUTE</span>
              </div>
              <span className="text-[6px] md:text-[8px] font-bold sm:hidden">EXECUTE</span>
            </button>
            
            <div className="mx-2 md:mx-6 flex items-center shrink-0">
              <div className="w-40 md:w-56 h-16 md:h-20 bg-black pixel-border-inset flex flex-col items-center justify-center relative">
                <div className="absolute top-0 w-full h-2 bg-primary"></div>
                <div className="absolute bottom-0 w-full h-1 bg-primary/20"></div>
                <span className="text-[6px] md:text-[8px] text-primary/60 mb-1">LOADED_{activeData?.slot || 'NONE'}:</span>
                <span className={`text-[8px] md:text-[11px] text-white tracking-widest ${powerOn ? 'flicker' : 'opacity-50'}`}>
                  {powerOn ? activeData?.title : 'OFFLINE'}
                </span>
              </div>
            </div>

            <button onClick={handleReset} className="flex flex-col items-center gap-2 group shrink-0">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-black text-primary flex items-center justify-center pixel-border-sm group-active:translate-y-2 transition-transform">
                <span className="material-symbols-outlined text-xl md:text-2xl">refresh</span>
              </div>
              <span className="text-[6px] md:text-[8px] font-bold">RESET</span>
            </button>
            <button onClick={handlePower} className="flex flex-col items-center gap-2 group shrink-0">
              <div className={`w-10 h-10 md:w-14 md:h-14 ${powerOn ? 'bg-red-700' : 'bg-green-700'} text-white flex items-center justify-center pixel-border-sm group-active:translate-y-2 transition-transform`}>
                <span className="material-symbols-outlined text-xl md:text-2xl font-bold">power_settings_new</span>
              </div>
              <span className="text-[6px] md:text-[8px] font-bold">POWER</span>
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
