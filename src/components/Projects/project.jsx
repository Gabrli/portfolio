import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"
import Skill from "../About/skill"
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import ButtonHref from "./buttonHref";

export default function Project(props){
    const { title, description, skills, ghHref, demoHref} = props
    const theme = useContext(themeContext)
    return (
        <div className={`project w-custom_w_1  ml-auto mr-auto  h-custom_h_3 border rounded-lg ${theme === "dark" ? "bg-secondary1 border-secondary2 " : "bg-secondary_light1/75 border-secondary_light2"} mobile:w-custom_w_2`}>
            <header className="pt-4 pl-4">
                <h4 className={`font-medium text-3xl ${theme === "dark" ? "text-white" : "text-black"}`}>{title}</h4>

            </header>
            <p className="pt-3 pl-4 text-gray-500">{description}</p>
            <section className="w-full grid grid-cols-2 gap-2 pl-3 pr-3 pt-3">
               {skills.map((skill) => {
                return (
                    <Skill name={skill.name} icon={skill.icon}/>
                )
               })}
            </section>
            <section className="flex flex-col justify-center items-center gap-2 pt-4">
                <ButtonHref content="Learn more on GitHub"  href={ghHref}/>
                <ButtonHref content="See the demo" href={demoHref} />
            </section>
        </div>
    )
}