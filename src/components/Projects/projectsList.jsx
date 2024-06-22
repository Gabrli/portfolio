import Project from "./project";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3, FaWordpress } from "react-icons/fa";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { IoLogoJavascript } from "react-icons/io5";
import { useTranslation } from "react-i18next";
export default function ProjectList() {
  const { t } = useTranslation();
  return (
    <div
      id="portfolio"
      className=" w-full flex justify-center gap-4 pb-16   pt-16 items-center  h-3/4    mobile:grid-cols-1"
    >
      <TECarousel className="pt-16 w-full" showControls showIndicators ride="carousel">
        <div className="relative  w-full ml-auto mr-auto overflow-hidden after:clear-both after:block after:content-['']">

        <TECarouselItem itemID={1}  className="relative float-left  mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
        <div className="w-full flex justify-center items-center gap-2 mobile:flex-col">
        <Project
          title="Taskify"
          description={t("taskify_description")}
          skills={[
            { id: Math.random(), name: "React", icon: <FaReact /> },
            { id: Math.random(), name: "TypeScript", icon: <SiTypescript /> },
            { id: Math.random(), name: "Tailwind", icon: <SiTailwindcss /> },
          ]}
          ghHref="https://github.com/Gabrli/Taskify"
          demoHref="https://taskify-work-planner.vercel.app/"
        />
        <Project
          title="GOPR"
          description={t("gopr_description")}
          skills={[
            { id: Math.random(), name: "HTML5", icon: <FaHtml5 /> },
            { id: Math.random(), name: "CSS3", icon: <FaCss3 /> },
          ]}
          ghHref="https://ThisProjectIsNOOpenSource"
          demoHref="https://gopr.org/kontakt"
        />
        </div>
        </TECarouselItem>

     


        <TECarouselItem itemID={2}  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"> 
        <div className="w-full flex justify-center items-center gap-2 mobile:flex-col">
        <Project
          title="Web Portfolio"
          description={t("web_portfolio_description")}
          ghHref="https://github.com/Gabrli/portfolio"
          demoHref="#"
          skills={[
            { id: Math.random(), name: "React", icon: <FaReact /> },
            {
              id: Math.random(),
              name: "JavaScript",
              icon: <IoLogoJavascript />,
            },
            { id: Math.random(), name: "Tailwind", icon: <SiTailwindcss /> },
          ]}
        />
        <Project
          title="Run&Balance - blog"
          description={t("runbalance_description")}
          ghHref="#"
          demoHref="http://runbalance-blog.42web.io/?i=1"
          skills={[
            { id: Math.random(), name: "Wordpress", icon: <FaWordpress /> },
          ]}
        />
        
        </div>
        </TECarouselItem>
        <TECarouselItem itemID={3}>
        <Project
          title="Weronika Chodakowska - piano"
          description={t("weronika_description")}
          ghHref=""
          demoHref="https://weronikachodakowska.com/"
          skills={[
            { id: Math.random(), name: "Wordpress", icon: <FaWordpress /> },
            {
              id: Math.random(),
              name: "JavaScript",
              icon: <IoLogoJavascript />,
            },
            { id: Math.random(), name: "CSS3", icon: <FaCss3 /> },
          ]}
        />
        </TECarouselItem>
      
        </div>

        
      </TECarousel>
    </div>
  );
}
