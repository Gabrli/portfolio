import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"

export default function SectionHeader(props){
    const { content } = props
    const theme = useContext(themeContext)
    return (
        <header className="w-full flex   pt-20 justify-center items-center">
            <h2 className={`font-bold text-4xl  ${theme === "dark" ? "text-white" : "text-black"}`}>{content}</h2>
        </header>
    )
}