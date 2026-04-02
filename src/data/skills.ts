import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
        title: "Dart",
        level: SkillLevel.Expert,
        icon: "/skills/dart.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Intermediate,
        icon: "/skills/python.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
      {
        title: "Tailwind CSS",
        level: SkillLevel.Expert,
        icon: "/skills/tailwind.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      // {
      //   title: "Nest.js",
      //   level: SkillLevel.Beginner,
      //   icon: "/skills/nestjs.svg",
      // },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "Flutter",
        level: SkillLevel.Expert,
        icon: "/skills/flutter.svg",
      },
      {
        title: "GetX",
        level: SkillLevel.Expert,
        icon: "/skills/getx.png",
      },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      {
        title: "ChatGPT API",
        level: SkillLevel.Expert,
        icon: "/skills/openai.svg",
      },
      {
        title: "OpenAI Models",
        level: SkillLevel.Intermediate,
        icon: "/skills/openai.svg",
      },
    ],
  },
  {
    title: "UI/UX & Design",
    items: [
      {
        title: "Figma",
        level: SkillLevel.Intermediate,
        icon: "faFigma",
      },
      {
        title: "Adobe XD",
        level: SkillLevel.Beginner,
        icon: "faAdobe",
      },
    ],
  },
  {
    title: "Graphics & Multimedia",
    items: [
      {
        title: "Adobe Photoshop",
        level: SkillLevel.Intermediate,
        icon: "faAdobe",
      },
      {
        title: "Adobe Illustrator",
        level: SkillLevel.Beginner,
        icon: "faAdobe",
      },
      {
        title: "Canva",
        level: SkillLevel.Expert,
        icon: "/skills/canva.svg",
      },
    ],
  },
  {
    title: "Microsoft Office Suite",
    items: [
      {
        title: "Microsoft Office Suite",
        level: SkillLevel.Expert,
        icon: "/skills/microsoft-office.svg",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "faDocker",
      },
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "faAws",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "faGit",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "faGithub",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Firebase",
        level: SkillLevel.Intermediate,
        icon: "/skills/firebase.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "faUbuntu",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Communication",
        level: SkillLevel.Expert,
        icon: "faComments",
      },
      {
        title: "Project Management",
        level: SkillLevel.Intermediate,
        icon: "faChartGantt",
      },
    ],
  },
];

export default skills;
