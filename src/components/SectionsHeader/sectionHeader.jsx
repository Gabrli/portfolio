import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"

export default function SectionHeader(props){
    const { content, id } = props
    const theme = useContext(themeContext)
    return (
        <header id={id} className="w-full flex   pt-20 justify-center items-center">
            <h2 className={`font-bold text-6xl  ${theme === "dark" ? "text-white" : "text-black"} mobile:text-3xl`}>{content}</h2>
        </header>
    )
}