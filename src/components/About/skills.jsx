import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"
import Skill from "./skill"
import { useTranslation } from "react-i18next";
import { FaReact, FaHtml5, FaCss3, FaWordpress } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export default function Skills(){
    const theme = useContext(themeContext)
    const { t } = useTranslation()
    return (
        <div className={`w-2/3 border rounded-lg flex items-center justify-start p-2 ${theme === "dark" ? "bg-secondary1/75  border-secondary2" : "bg-secondary_light1/75 border-secondary_light2"} mobile:w-full `}>
            <p className={`text-pink-500 pl-4 pr-4  pt-2 pb-2 text-lg`}>{t("skills")}</p>
            <div className={`w-11/12 border-l ${theme === "dark" ? "border-secondary2" : "border-secondary_light2"} grid grid-cols-6 gap-2 pr-2 pl-4 mobile:grid-cols-3 mobile2:grid-cols-1  `}>
                <Skill name="React" icon={<FaReact/>}/>
                <Skill name="TypeScript" icon={<SiTypescript />}/>
                <Skill name="JavaScript" icon={<IoLogoJavascript/>}/>
                <Skill name="Tailwind" icon={<SiTailwindcss/>}/>
                <Skill name="HTML5" icon={<FaHtml5/>}/>
                <Skill name="CSS3" icon={<FaCss3/>}/>
                <Skill name="Wordpress" icon={<FaWordpress/>}/>
            </div>
        </div>
    )
}