import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"

export default function ButtonContact(props){
    const { content, href, } = props
    const theme = useContext(themeContext)
    return (
        <a className={`transition duration-500 ease-in-out rounded-xl text-gray-500  text-center p-1 border ${theme === "dark" ? "border-secondary2 hover:bg-white  " : "border-secondary_light2 hover:bg-black"}`} href={href}>{content}</a>
    )
}