import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"
import { MdKeyboardArrowUp } from "react-icons/md";

export default function ButtonLang(props){
    const { setIsDrop, isDrop, lang  } = props
    const theme = useContext(themeContext)
    return (
        <button onClick={() => setIsDrop(!isDrop)} className={` transition duration-500 ease-in-out rounded flex justify-center items-center text-gray-500 p-2 text-xl ${theme === "dark" ? " hover:text-white" : " hover:text-black"} `}>{lang === "pl" ? "PL" : "EN"}<span  className={`transition duration-500 ease-in-out ${
            isDrop ? "rotate-180" : ""
          }`}><MdKeyboardArrowUp/></span></button>
    )
}