import Project from "./project";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { useTranslation } from "react-i18next";
export default function ProjectList(){
    const { t } = useTranslation()
    return (
        <div id="portfolio" className=" w-full grid grid-cols-2 justify-center gap-4 pb-12   pt-16 items-center  h-3/4    mobile:grid-cols-1">
         <Project title="Taskify" description={t("taskify_description")} skills={[{id: Math.random(), name: 'React', icon: <FaReact/>}, {id:Math.random(), name: "TypeScript", icon: <SiTypescript/>}, {id:Math.random(), name: "Tailwind", icon: <SiTailwindcss/>}]} ghHref="https://github.com/Gabrli/Taskify" demoHref="https://taskify-work-planner.vercel.app/"/>
         <Project title="GOPR - contact" description={t("gopr_description")} skills={[{id: Math.random(), name: "HTML5", icon: <FaHtml5/>}, {id: Math.random(), name: "CSS3", icon:<FaCss3/>}]} ghHref="https://ThisProjectIsNOOpenSource" demoHref="https://gopr.org/kontakt"/>
         <Project title="Web Portfolio" description={t("web_portfolio_description")} ghHref="https://github.com/Gabrli/portfolio" demoHref="#" skills={[{id:Math.random(), name:"React", icon:<FaReact/>}, {id:Math.random(), name: "JavaScript", icon:<IoLogoJavascript/> }, {id:Math.random(), name:"Tailwind", icon:<SiTailwindcss/>}]}/>
         
        </div>
    )
}