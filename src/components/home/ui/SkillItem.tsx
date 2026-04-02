import type { ISkillListItem } from "@/types";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faRobot, 
  faComments, 
  faBrain, 
  faChartLine, 
  faPalette, 
  faUserGear, 
  faPenRuler, 
  faSitemap, 
  faDraftingCompass, 
  faImage, 
  faVectorSquare, 
  faMagicWandSparkles, 
  faBrush, 
  faVideo, 
  faFileWord, 
  faFileExcel, 
  faFilePowerpoint, 
  faEnvelope, 
  faUsers, 
  faChartGantt, 
  faDatabase,
  faBox,
  faCloud,
  faCodeBranch,
  faFire,
  faDesktop,
  faGlobe,
  faTasks,
  faLightbulb,
  faHandshake,
  faChartPie,
  faClock,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";
import { 
  faGithub,
  faAws,
  faDocker,
  faGit,
  faUbuntu,
  faFigma
} from "@fortawesome/free-brands-svg-icons";
import CardBox from "@/components/core/CardBox";
import Row from "@/components/core/Row";
import Column from "@/components/core/Column";

// Function to get official brand colors
const getBrandColor = (iconName: string): string => {
  const brandColors: { [key: string]: string } = {
    "faGithub": "#181717",      // GitHub black
    "faAws": "#FF9900",         // AWS orange
    "faDocker": "#2496ED",      // Docker blue
    "faGit": "#F05032",         // Git orange
    "faUbuntu": "#E95420",      // Ubuntu orange
    "faFigma": "#F24E1E",       // Figma red
    "faAdobe": "#FF0000",       // Adobe red (for Adobe products)
  };
  return brandColors[iconName] || "var(--primaryColor)";
};

// Map icon strings to FontAwesome icon components
const iconMap: { [key: string]: any } = {
  "faRobot": faRobot,
  "faComments": faComments,
  "faBrain": faBrain,
  "faChartLine": faChartLine,
  "faPalette": faPalette,
  "faUserGear": faUserGear,
  "faPenRuler": faPenRuler,
  "faAdobe": faPenToSquare,
  "faSitemap": faSitemap,
  "faDraftingCompass": faDraftingCompass,
  "faImage": faImage,
  "faVectorSquare": faVectorSquare,
  "faMagicWandSparkles": faMagicWandSparkles,
  "faBrush": faBrush,
  "faVideo": faVideo,
  "faFileWord": faFileWord,
  "faFileExcel": faFileExcel,
  "faFilePowerpoint": faFilePowerpoint,
  "faEnvelope": faEnvelope,
  "faUsers": faUsers,
  "faChartGantt": faChartGantt,
  "faDatabase": faDatabase,
  "faMongodb": faDatabase,       // Use database icon for MongoDB
  "faPostgresql": faDatabase,    // Use database icon for PostgreSQL
  "faMysql": faDatabase,         // Use database icon for MySQL
  "faDocker": faDocker,
  "faAws": faAws,
  "faGit": faGit,
  "faGithub": faGithub,
  "faFire": faFire,
  "faUbuntu": faUbuntu,
  "faApi": faGlobe,
  "faAgile": faTasks,
  "faLightbulb": faLightbulb,
  "faHandshake": faHandshake,
  "faChartPie": faChartPie,
  "faTasks": faTasks,
  "faClock": faClock,
  "faFigma": faFigma,
};

const SkillItem = ({ data }: { data: ISkillListItem }) => {
  return (
    <CardBox classNames="p-4 items-center justify-start rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] w-full group">
      <p className="text-lg/6 font-semibold text-center">{data.title}</p>

      {data.items.length > 0 ? (
        <Row classNames="gap-4 mt-8 flex-wrap justify-center items-center">
          {data.items.map((skill, index) => {
            return (
              <Column
                key={`skill-item-${index}`}
                classNames="items-center gap-1 text-[var(--textColor)]"
              >
                {skill.icon ? (
                  iconMap[skill.icon] ? (
                    <FontAwesomeIcon 
                      icon={iconMap[skill.icon]} 
                      className={`w-12 h-12 group-hover:scale-110 transition-transform duration-200 ${
                        // Use colorful style for brand icons
                        ["faGithub", "faAws", "faDocker", "faGit", "faUbuntu", "faFigma", "faAdobe"].includes(skill.icon)
                          ? ""
                          : "text-[var(--primaryColor)]"
                      }`}
                      style={
                        // Apply brand colors for official icons
                        ["faGithub", "faAws", "faDocker", "faGit", "faUbuntu", "faFigma", "faAdobe"].includes(skill.icon)
                          ? { color: getBrandColor(skill.icon) }
                          : {}
                      }
                    />
                  ) : (
                    <Image
                      src={skill.icon}
                      alt={`logo-${skill.title}`}
                      width={144}
                      height={144}
                      sizes="100%"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/images/logical-thinking.png"
                      className="w-12 lg:w-14 h-auto aspect-square object-cover"
                    />
                  )
                ) : null}

                <p className="text-xs/6 font-normal">{skill.title}</p>
              </Column>
            );
          })}
        </Row>
      ) : null}
    </CardBox>
  );
};

export default SkillItem;
