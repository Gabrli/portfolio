import Project from "./project";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
export default function ProjectList(){
    
    return (
        <div id="portfolio" className=" w-full grid grid-cols-2 justify-center gap-4 pb-12   pt-16 items-center  h-3/4    mobile:grid-cols-1">
         <Project title="Taskify" description="Taskify Work Planner: Streamline your task management and enhance productivity with Taskify. Effortlessly organize tasks, collaborate with your team, and stay on top of deadlines. Experience seamless task management today!" skills={[{id: Math.random(), name: 'React', icon: <FaReact/>}, {id:Math.random(), name: "TypeScript", icon: <SiTypescript/>}, {id:Math.random(), name: "Tailwind", icon: <SiTailwindcss/>}]} ghHref="https://github.com/Gabrli/Taskify" demoHref="https://taskify-work-planner.vercel.app/"/>
         <Project title="GOPR - contact" description="The GOPR first commercial website was created to provide easy access to contact with GOPR. Thanks to a transparent contact form and clear contact details, users can quickly contact the organization." skills={[{id: Math.random(), name: "HTML5", icon: <FaHtml5/>}, {id: Math.random(), name: "CSS3", icon:<FaCss3/>}]} ghHref="https://ThisProjectIsNOOpenSource" demoHref="https://gopr.org/kontakt"/>
         <Project title="Web Portfolio" description="This is my web portfolio you are currently on. This project shows that I can make business cards, websites, portfolios, companies and people." ghHref="https://github.com/Gabrli/portfolio" demoHref="#" skills={[{id:Math.random(), name:"React", icon:<FaReact/>}, {id:Math.random(), name: "JavaScript", icon:<IoLogoJavascript/> }, {id:Math.random(), name:"Tailwind", icon:<SiTailwindcss/>}]}/>
         
        </div>
    )
}