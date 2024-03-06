import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { themeContext } from "../../contexts/themeContext";
export default function ButtonGitHub(){
    const theme = useContext(themeContext)
    return (
        <button className={`transition duration-500 ease-in-out rounded text-gray-500 p-2 text-xl border ${theme === "dark" ? "border-secondary2 hover:text-white" : "border-secondary_light2 hover:text-black"}`}><a href="https://github.com/Gabrli"><FaGithub /></a></button>
    )
}