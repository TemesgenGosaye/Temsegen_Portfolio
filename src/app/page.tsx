import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/components/home/Section1"));
const AboutMeSection = dynamic(() => import("@/components/home/AboutMeSection"));
const HomeSection2 = dynamic(() => import("@/components/home/Section2"));
const HomeSection3 = dynamic(() => import("@/components/home/Section3"));
const HomeSection4 = dynamic(() => import("@/components/home/Section4"));
const StatisticsSection = dynamic(() => import("@/components/home/StatisticsSection"));
const HomeSectionProjects = dynamic(() => import("@/components/home/SectionProjects"));
const HomeSection6 = dynamic(() => import("@/components/home/Section6"));

const Home = () => {
  return (
    <PageBox>
      <HomeSection1 id="hero" />
      <AboutMeSection id="about" />
      <HomeSection2 id="services" />
      <HomeSection3 id="experiences" />
      <HomeSection4 id="skills" />
      <StatisticsSection id="statistics" />
      <HomeSectionProjects id="projects" />
      <HomeSection6 id="contact" />
    </PageBox>
  );
};

export default Home;
