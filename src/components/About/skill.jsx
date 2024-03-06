import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"

export default function Skill(props){
    const { name,icon } = props
    const theme = useContext(themeContext)
    return (
        <p className={`rounded-xl pl-7 pr-7 pt-2 pb-2 flex border justify-center items-center gap-2 cursor-pointer text-gray-500 ${theme === "dark" ? "border-secondary2 hover:bg-white hover:text-black" : "border-secondary_light2 hover:bg-black hover:text-white"} transition duration-500 ease-in-out `}>{icon} {name}</p>
    )
}