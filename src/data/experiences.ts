import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Engineer",
    company: "Metahara Sugar Factory",
    startDate: "2026",
    isCurrentJob: true,
    location: "Ethiopia",
    shortDescription:
      "Built a scalable property & housing management platform using PERN + Prisma",
    description: [
      "Engineered a full-scale property management system using PostgreSQL, Express, React, and Node.js, supporting 500+ residential units across enterprise operations",
      "Optimized backend performance with Prisma ORM and advanced query strategies, reducing data access latency by 60%",
      "Developed real-time analytics dashboards using WebSockets and React, enabling live monitoring of occupancy and maintenance workflows",
      "Implemented a robust testing strategy with Jest and Cypress, achieving 95% test coverage and significantly reducing production defects",
    ],
  },
  {
    designation: "Junior Fullstack Developer",
    company: "Addis Software Solutions",
    startDate: "2025",
    endDate: "2026",
    isCurrentJob: false,
    location: "Ethiopia",
    shortDescription:
      "Delivered high-quality fullstack applications using React, Node.js, and TypeScript",
    description: [
      "Developed and deployed 5+ production-grade web applications using modern React architecture and TypeScript, ensuring performance and scalability",
      "Designed RESTful APIs and microservices handling over 10K daily requests with 99.9% uptime",
      "Collaborated in agile teams with Git-based workflows, contributing to code reviews, sprint planning, and continuous delivery pipelines",
      "Mentored junior developers on modern JavaScript practices, improving team productivity and code quality",
    ],
  },
  {
    designation: "Software Engineering Intern",
    company: "Ethio Telecom",
    startDate: "2022",
    endDate: "2023",
    isCurrentJob: false,
    location: "Ethiopia",
    shortDescription:
      "Worked on enterprise telecom systems using Java, Spring Boot, and Angular",
    description: [
      "Contributed to large-scale telecom platforms serving millions of users, focusing on billing and subscription systems",
      "Built high-performance REST APIs with Spring Boot processing 100K+ daily transactions with low latency",
      "Developed responsive UI components using Angular, improving cross-platform user experience",
      "Participated in enterprise-level code reviews, testing, and system optimization processes",
    ],
  },
  {
    designation: "Freelance Fullstack Developer",
    company: "Self-Employed",
    startDate: "2024",
    isCurrentJob: true,
    location: "Remote",
    shortDescription:
      "Delivered scalable SaaS and web solutions using modern cloud and frontend technologies",
    description: [
      "Designed and delivered 20+ fullstack applications for startups and businesses, including SaaS platforms and e-commerce systems",
      "Architected scalable cloud solutions using AWS and Firebase, reducing infrastructure costs by up to 40%",
      "Focused on modern UI/UX principles, achieving high user satisfaction and strong client retention",
      "Managed end-to-end product lifecycle from requirements analysis to deployment and maintenance",
    ],
  },
  {
    designation: "Volunteer Programming Instructor",
    company: "Community Programs",
    startDate: "2025",
    isCurrentJob: true,
    location: "Ethiopia",
    shortDescription:
      "Teaching programming and web development to underserved communities",
    description: [
      "Delivered programming education to 100+ students, focusing on JavaScript, Python, and web fundamentals",
      "Designed structured curricula with project-based learning, enabling students to build real-world applications",
      "Organized coding workshops and hackathons to promote collaboration and hands-on experience",
      "Mentored students into internships and junior developer roles",
    ],
  },
  {
    designation: "Team Lead — Final Year Project",
    company: "Debre Berhan University",
    startDate: "2024",
    endDate: "2025",
    isCurrentJob: false,
    location: "Ethiopia",
    shortDescription:
      "Led development of a campus management system using MERN and microservices",
    description: [
      "Led a team of 5 engineers to build a scalable campus management platform serving 2,000+ students",
      "Implemented agile workflows and version control strategies, improving delivery efficiency by 50%",
      "Designed a microservices-based architecture with Docker, ensuring scalability and maintainability",
      "Presented the system at a university tech showcase and received the Best Innovation Award",
    ],
  },
];

export default experiences;