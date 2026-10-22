export const personalInfo = {
  fullName: "MD Mohayminul Islam Rayhan",
  preferredName: "Rayhan",
  role: "Frontend Developer",
  status: "Available for Junior Opportunities",
  education: {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Dhaka International University",
    location: "Dhaka, Bangladesh",
    status: "Undergraduate Student",
  },
  location: "Bangladesh",
  email: "mohayminul94@gmail.com",
  github: "https://github.com/mohayminul94",
  linkedin: "https://www.linkedin.com/in/mohayminulislamrayhan/",
  tagline: "Building Digital Experiences That Feel Right.",
  bio: "I'm Rayhan, a frontend developer and CSE student passionate about building clean, responsive, and user-focused web experiences with modern frontend technologies.",
  aboutParagraph: "I'm a Computer Science and Engineering student at Dhaka International University with a strong interest in frontend development. I enjoy transforming ideas and designs into responsive, accessible, and practical web applications. I'm continuously improving my skills through hands-on projects and learning modern web technologies.",
  techLine: "React · Next.js · JavaScript · Tailwind CSS",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const aboutHighlights = [
  {
    id: "education",
    title: "Education",
    subtitle: "Computer Science & Engineering",
    detail: "Dhaka International University",
    description: "Focusing on core computer science foundations, algorithms, data structures, and web technologies.",
    iconName: "GraduationCap",
  },
  {
    id: "focus",
    title: "Focus Area",
    subtitle: "Frontend Development",
    detail: "Modern Web Interfaces",
    description: "Crafting accessible, responsive, and component-driven web applications with React and Tailwind CSS.",
    iconName: "Code",
  },
  {
    id: "learning",
    title: "Currently Learning",
    subtitle: "Backend Development",
    detail: "Node.js · Express.js · MongoDB",
    description: "Expanding knowledge into server-side APIs, database modeling, and full-stack integration patterns.",
    iconName: "Sparkles",
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    description: "Core frontend stack for building responsive, performant user interfaces.",
    badge: "Core Stack",
    skills: [
      { name: "HTML5", level: "Semantic Markup & Accessibility", icon: "Code2" },
      { name: "CSS3", level: "Modern Layouts, Flexbox & Grid", icon: "Palette" },
      { name: "JavaScript", level: "ES6+, DOM Manipulation & Async", icon: "Braces" },
      { name: "React", level: "Hooks, Components & State Management", icon: "Atom" },
      { name: "Next.js", level: "App Router, SSR & Optimization", icon: "Globe" },
      { name: "Tailwind CSS", level: "Utility-first & Design Systems", icon: "Layout" },
    ],
  },
  {
    category: "Development Tools",
    description: "Tools for version control, efficient development, and project management.",
    badge: "Workflow",
    skills: [
      { name: "Git", level: "Version Control & Branching", icon: "GitBranch" },
      { name: "GitHub", level: "Repositories & Collaboration", icon: "Github" },
      { name: "VS Code", level: "Primary Development Environment", icon: "Terminal" },
    ],
  },
  {
    category: "Authentication",
    description: "Authentication frameworks and secure session management.",
    badge: "Security",
    skills: [
      { name: "Better Auth", level: "Modern Authentication Integration", icon: "ShieldCheck" },
    ],
  },
  {
    category: "Currently Learning",
    description: "Expanding technical breadth with foundational backend and database technologies.",
    badge: "In Progress",
    isLearning: true,
    skills: [
      { name: "Node.js", level: "Runtime Environment & Server Logic", icon: "Server" },
      { name: "Express.js", level: "RESTful APIs & Middleware Routing", icon: "Cpu" },
      { name: "MongoDB", level: "NoSQL Database & Document Modeling", icon: "Database" },
    ],
  },
];

export const featuredProjects = [
  {
    id: "bazar-ghor",
    title: "Bazar-Ghor",
    subtitle: "E-Commerce & Commodity Tracker",
    description: "A web project focused on creating a convenient online shopping experience with a clean, user-friendly interface.",
    liveUrl: "https://bazar-ghor.vercel.app",
    githubUrl: "https://github.com/mohayminul94/Bazar-Ghor",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive UI", "E-Commerce"],
    highlights: [
      "Intuitive product browsing and categorized item listings",
      "Responsive design optimized for both desktop and mobile viewports",
      "Interactive shopping cart and clean checkout interface flow",
    ],
    image: "/projects/bazar-ghor.png",
    imageAlt: "Bazar-Ghor e-commerce and daily grocery market prices hero illustration",
    browserMockup: {
      headerTitle: "bazar-ghor.vercel.app",
      tagline: "আজকের বাজারের দাম এক নজরে",
      accentTag: "Featured E-Commerce",
      themeColor: "#118B44",
    },
  },
  {
    id: "fitlog",
    title: "FitLog",
    subtitle: "Workout Library & Fitness Planner",
    description: "A workout-focused web application designed to help users explore workouts and organize their personal workout plans.",
    liveUrl: "https://myfitlogapp.netlify.app",
    githubUrl: "https://github.com/mohayminul94/Assignment_6_FitLog",
    tags: ["JavaScript", "React", "Next.js", "Fitness Tracker", "Planner"],
    highlights: [
      "Curated workout routines categorized by muscle group and difficulty",
      "Interactive workout planning and personal routine organization",
      "Streamlined tracker interface to log active sessions effortlessly",
    ],
    image: "/projects/fitlog-hero.jpg",
    imageAlt: "FitLog workout library with exercises and training tracker",
    browserMockup: {
      headerTitle: "myfitlogapp.netlify.app",
      tagline: "TRAIN WITH INTENT. LOG EVERY SET.",
      accentTag: "Fitness Companion",
      themeColor: "#B7D894",
    },
  },
  {
    id: "devstack",
    title: "DevStack",
    subtitle: "Tech Conference & Event Portal",
    description: "A conference website concept featuring event information, speaker profiles, and pricing sections in a structured responsive layout.",
    liveUrl: "https://mydevstackweb.netlify.app/",
    githubUrl: "https://github.com/mohayminul94/Assignment_05_DevStck",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Layout", "Event Portal"],
    highlights: [
      "Structured schedule timetable showcasing keynote sessions and workshops",
      "Keynote speaker profiles with interactive speaker cards",
      "Tiered ticket pricing grid with clear feature comparisons",
    ],
    image: "/projects/devstack-banner.png",
    heroGraphic: "/projects/devstack.png",
    imageAlt: "DevStack annual developer conference summit banner and schedule",
    browserMockup: {
      headerTitle: "mydevstackweb.netlify.app",
      tagline: "Annual Developer Summit & Workshops",
      accentTag: "Conference Concept",
      themeColor: "#38bdf8",
    },
  },
];

export const journeyMilestones = [
  {
    step: "01",
    title: "Web Fundamentals",
    technologies: "HTML5 · CSS3 · JavaScript",
    description: "Built a solid groundwork in semantic web markup, modern CSS layouts (Flexbox & CSS Grid), DOM manipulation, and core JavaScript programming paradigms.",
    status: "Completed",
  },
  {
    step: "02",
    title: "Modern Frontend",
    technologies: "React · Next.js · Tailwind CSS",
    description: "Shifted to component-driven development with React hooks, responsive styling systems via Tailwind CSS, and server-side features with Next.js App Router.",
    status: "Active Focus",
  },
  {
    step: "03",
    title: "Development Workflow",
    technologies: "Git · GitHub · VS Code",
    description: "Adopted professional version control habits, branching strategies, clean repository organization, and automated deployment pipelines via Vercel & Netlify.",
    status: "Proficient",
  },
  {
    step: "04",
    title: "Next Milestone",
    technologies: "Node.js · Express.js · MongoDB",
    description: "Currently studying backend concepts: creating RESTful APIs, handling asynchronous database queries, authentication flows, and building full-stack applications.",
    status: "In Progress",
  },
];
