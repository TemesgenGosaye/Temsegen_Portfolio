import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";

const HomeSection5 = ({ id }: { id: string }) => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "@Metahara Sugar Factory",
      period: "2023 - Present",
      achievements: [
        "🏢 Architected a comprehensive property management system from scratch using PERN stack, serving 500+ properties across the factory's residential portfolio",
        "⚡ Optimized database queries and implemented Prisma ORM, reducing data retrieval time by 60% and improving system responsiveness",
        "🧠 Led development of real-time dashboard analytics using React and WebSocket connections, enabling management to track occupancy rates and maintenance requests",
        "🚀 Deployed automated testing pipeline with Jest and Cypress, achieving 95% code coverage and reducing production bugs by 80%"
      ]
    },
    {
      title: "Junior Fullstack Developer",
      company: "@Addis Software Solutions",
      period: "2022 - 2023",
      achievements: [
        "💻 Developed 5+ client projects using modern React patterns and TypeScript, delivering responsive web applications with 100% client satisfaction",
        "⚡ Implemented RESTful APIs and microservices architecture, handling 10K+ daily requests with 99.9% uptime",
        "🧠 Collaborated in agile teams using Git workflows, participating in code reviews and sprint planning to ensure high-quality deliverables",
        "🚀 Mentored junior developers on best practices and modern JavaScript frameworks, improving team productivity by 30%"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "@Ethio Telecom",
      period: "2021 - 2022",
      achievements: [
        "🏢 Contributed to enterprise telecom applications serving 50M+ customers, focusing on billing and subscription management modules",
        "⚡ Built RESTful APIs using Spring Boot that processed 100K+ transactions daily with sub-second response times",
        "🧠 Developed responsive frontend components with Angular, improving user experience across desktop and mobile platforms",
        "🚀 Participated in code reviews and testing protocols, maintaining code quality standards in a large-scale enterprise environment"
      ]
    },
    {
      title: "Freelance Fullstack Developer",
      company: "@Self-Employed",
      period: "2020 - Present",
      achievements: [
        "💻 Delivered 20+ custom web solutions for startups and small businesses, ranging from e-commerce platforms to SaaS applications",
        "⚡ Implemented scalable cloud infrastructure using AWS and Firebase, reducing client hosting costs by 40% while improving performance",
        "🧠 Designed and developed fullstack applications with modern UI/UX principles, achieving 4.8/5 average client ratings",
        "🚀 Managed entire project lifecycles from requirements gathering to deployment and maintenance, ensuring on-time delivery"
      ]
    },
    {
      title: "Volunteer Programming Teacher",
      company: "@Various Community Programs",
      period: "2021 - Present",
      achievements: [
        "🏢 Taught programming fundamentals to 100+ students from underserved communities, focusing on web development and problem-solving skills",
        "⚡ Created comprehensive curriculum and hands-on projects, enabling students to build their first web applications within 3 months",
        "🧠 Organized coding workshops and hackathons, fostering collaboration and practical learning experiences",
        "🚀 Mentored students through their first tech projects, with several securing internships and entry-level positions"
      ]
    },
    {
      title: "Team Leader",
      company: "@Debre Berhan University",
      period: "2020 - 2021",
      achievements: [
        "💻 Led a team of 5 developers in building an innovative campus management system using MERN stack, serving 2K+ students",
        "⚡ Implemented agile methodologies and version control workflows, improving team collaboration and project delivery by 50%",
        "🧠 Architected scalable microservices architecture with Docker containerization, ensuring system reliability and easy deployment",
        "🚀 Presented project at university tech showcase, receiving 'Best Innovation Award' and recognition from industry judges"
      ]
    }
  ];

  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Professional Experience</SectionTitle>

        <Column classNames="w-full items-center justify-center mt-8 gap-8">
          {experiences.map((experience, index) => (
            <Column key={`experience-${index}`} classNames="w-full max-w-4xl">
              <Row classNames="gap-4 items-start mb-4">
                <Column classNames="flex-1">
                  <h3 className="text-2xl font-bold dark:text-[var(--textColor)] text-[var(--textColor)]">
                    {experience.title}
                  </h3>
                  <p className="text-lg dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
                    {experience.company}
                  </p>
                  <p className="text-sm dark:text-[var(--textColorLight)] text-[var(--textColorLight)] opacity-75">
                    {experience.period}
                  </p>
                </Column>
              </Row>
              
              <div className="dark:text-[var(--textColorLight)] text-[var(--textColorLight)] space-y-3">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <div key={`achievement-${achievementIndex}`} className="flex items-start gap-2">
                    <span className="text-lg leading-tight">{achievement}</span>
                  </div>
                ))}
              </div>
              
              {index < experiences.length - 1 && (
                <div className="w-full h-px bg-[var(--borderColor)] my-8"></div>
              )}
            </Column>
          ))}
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection5;
