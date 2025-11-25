import { Project, Experience, SkillCategory, Education, Certification, Profile } from './types';

export const PROFILE: Profile = {
  name: "Benaissa Ishak Motanabi",
  role: "DevOps Engineer & IT Systems Manager",
  location: "Cité 1090 LSP Baba Hassen, Alger",
  email: "benaissa.ishaq@gmail.com",
  phone: "213776924986",
  phoneDisplay: "+213 776 92 49 86",
  phone2: "213560535365",
  phoneDisplay2: "+213 560 53 53 65",
  github: "https://github.com/zakblacki",
  linkedin: "https://linkedin.com/in/zakblacki",
  about: "DevOps Engineer and IT Systems Manager with a strong background in systems integration, network infrastructure, and automation. Experienced in optimizing company networks, managing security incidents, and developing full-stack applications. Proven track record in integration testing, deployment, and maintenance of complex NDB systems."
};

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Systems Integration Engineer",
    company: "Huawei Partner Audaque - High Commission for Digitalization",
    period: "2024 - Present",
    description: [
      "Integration testing of applications/NDB with third-party systems.",
      "Deployment and commissioning of applications/NDB.",
      "System/NDB maintenance and operation."
    ]
  },
  {
    id: "2",
    role: "DevOps Engineer",
    company: "Fayda/G-Besoin",
    period: "2021 - 2023",
    description: [
      "Conducted customer service needs surveys and designed application systems for public services.",
      "Optimized and developed company network infrastructure.",
      "Provided user support and managed access rights.",
      "Implemented and maintained security solutions for company network.",
      "Analyzed security incidents and provided remediation."
    ]
  },
  {
    id: "3",
    role: "Software Development Intern",
    company: "SARL ABENCO",
    period: "2020",
    description: [
      "Developed LMS-based learning management system with mobile & web modules for multiplatform application."
    ]
  },
  {
    id: "4",
    role: "Game Development Intern",
    company: "DevQuest",
    period: "2019",
    description: [
      "Digital agency combining traditional and modern communication methods.",
      "Focused on 3D video game design and modeling."
    ]
  },
  {
    id: "5",
    role: "Web Development Intern",
    company: "IntelliX Web",
    period: "2018",
    description: [
      "Implemented customer relationship management to optimize client and prospect data processing and analysis."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Wide Network Infrastructure",
    description: "Designed comprehensive network infrastructure with DNS, HTTP, DHCP servers on Linux with automation scripts. Created global network topology with end-to-end site interconnections, complete documentation, and financial analysis.",
    technologies: ["Linux", "DNS", "HTTP", "DHCP", "Automation"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    demoUrl: "#",
    repoUrl: "https://github.com/zakblacki"
  },
  {
    id: "p2",
    title: "Cybersecurity Assessment",
    description: "Designed system and network architecture using VMware and Cisco technologies. Conducted penetration testing to identify security vulnerabilities in IT systems.",
    technologies: ["VMware", "Cisco", "Penetration Testing", "Security"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    demoUrl: "#",
    repoUrl: "https://github.com/zakblacki"
  },
  {
    id: "p3",
    title: "Student Management App",
    description: "Created full-stack web application for managing student bureau activities, including database design using Merise methodology.",
    technologies: ["Full Stack", "Database Design", "Merise"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    demoUrl: "#",
    repoUrl: "https://github.com/zakblacki"
  },
  {
    id: "p4",
    title: "IoT Temperature Control",
    description: "Developed Java desktop application using JavaFX to control refrigerator temperature based on Arduino microcontroller integration.",
    technologies: ["Java", "JavaFX", "Arduino", "IoT"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    demoUrl: "#",
    repoUrl: "https://github.com/zakblacki"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker", "VMware", "Linux", "Apache", "Grafana", "Zabbix", "Firebase", "Cloudflare"]
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "C#", "PHP", "JavaScript", "SQL", "Dart"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML/CSS", "Laravel", "CakePHP", "WordPress", "Flutter"]
  },
  {
    title: "Security & Analysis",
    skills: ["Wireshark", "Cisco Packet Tracer", "nmap"]
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "Computer Engineering - Information Systems Manager",
    institution: "Exia Cesi Algeria",
    period: "2021",
    description: "Master's Degree (BAC+5). French RNCP certified engineering degree."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Cisco CCNA1 & CCNA2", year: "2018" },
  { name: "Laptop Maintenance Certificate", year: "2017" },
  { name: "TOEIC Certification", year: "2022" }
];