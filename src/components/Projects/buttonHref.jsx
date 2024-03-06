import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"

export default function ButtonHref(props){
    const { content, href } = props
    const theme = useContext(themeContext)
    return (
        <button className={`w-11/12 flex justify-center items-center text-gray-500 pt-2 pb-2 rounded-xl border ${theme === "dark" ? "bg-secondary1 border-secondary2" : "border-secondary_light2 bg-secondary_light1 border-secondary_light2"} `}><a href={href}> {content}</a></button>
    )
}