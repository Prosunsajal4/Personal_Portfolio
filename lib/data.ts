export const personalInfo = {
  name: "Prosun Mukherjee",
  title: "MERN Stack Developer",
  email: "prosunsajal123@gmail.com",
  phone: "+8801911572117",
  location: "Khulna, Bangladesh",
  tagline:
    "Building scalable, high-performance, and user-centric web applications.",
  summary:
    "A results-driven and detail-oriented MERN Stack Developer with strong expertise in MongoDB, Express.js, React, and Node.js. Passionate about REST API development, full-stack architecture, and modern web technologies.",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Prosunsajal4",
    linkedin: "https://www.linkedin.com/in/prosun-mukherjee-sajal/",
    portfolio: "https://prosunsajal4.github.io/",
    facebook: "https://www.facebook.com/sajalprosun",
    instagram: "https://www.instagram.com/prosun_mukherjee_sajal",
  },
};

export const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces with React, Next.js, and modern CSS.",
    icon: "palette",
  },
  {
    title: "Backend Development",
    description:
      "Designing robust REST APIs and server-side logic with Node.js, Express.js, and MongoDB.",
    icon: "server",
  },
  {
    title: "Full-Stack Apps",
    description:
      "End-to-end development of scalable web applications with authentication, databases, and deployment.",
    icon: "layers",
  },
];

export const skills = {
  Languages: [
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 70 },
    { name: "Python", level: 60 },
    { name: "Java", level: 55 },
    { name: "C", level: 50 },
    { name: "C++", level: 50 },
    { name: "MATLAB", level: 45 },
  ],
  Frontend: [
    { name: "React.js", level: 88 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
  ],
  Backend: [
    { name: "Node.js", level: 82 },
    { name: "Express.js", level: 80 },
    { name: "REST APIs", level: 85 },
    { name: "JWT", level: 70 },
    { name: "Firebase Auth", level: 65 },
  ],
  Database: [
    { name: "MongoDB", level: 78 },
    { name: "Firebase", level: 65 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 88 },
    { name: "Postman", level: 80 },
    { name: "Vercel", level: 75 },
  ],
};

export const projects = [
  {
    title: "SkillMatchAI",
    subtitle: "AI-Based Job Matching Platform",
    description:
      "Developed an AI-based job matching system with personalized skill recommendations and a real-time analytics dashboard, improving match accuracy and boosting user engagement by 30%.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "AI-powered skill matching system for students and job seekers",
      "Integrated ML models for personalized skill recommendations",
      "Interactive dashboard with real-time data visualization",
    ],
    live: "https://skillmatchai-phi.vercel.app/",
    github: "https://github.com/Prosunsajal4/SkillMatchAI",
    featured: true,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "BookCourier",
    subtitle: "Online Book Selling Platform",
    description:
      "Developed a scalable online book selling platform with React and Node.js, implementing RBAC, secure authentication, protected routing, and responsive UI components to enhance user experience.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "Role-specific dashboards for admin, seller, and customer users",
      "Implemented role-based access control (RBAC) with protected routes",
      "Dynamic UI components to enhance interactivity",
    ],
    live: "#",
    github: "#",
    featured: true,
    color: "from-emerald-500 to-teal-600",
  },
];

export const education = [
  {
    degree: "BSc in Electronics and Communication Engineering",
    institution: "Khulna University",
    period: "2023 – Present",
    location: "Khulna",
    grade: "CGPA – 3.30",
  },
  {
    degree: "Complement Web Development With Programming Hero",
    institution: "Programming Hero",
    period: "July 2025 – Dec 2025",
    location: "Online",
    grade: "Certificate",
  },
  {
    degree: "Full Stack Development with MERN",
    institution: "CodersTrust",
    period: "Feb 2026 – Mar 2026",
    location: "Online",
    grade: "Certificate",
  },
];

export const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
