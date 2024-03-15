import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"

export default function AboutCard(props){
    const { title, description, subtitle } = props
    const theme = useContext(themeContext)
    return (
        <div className={`w-1/3 transition duration-500 ease-in-out rounded-lg cursor-pointer  h-custom_h_2 border ${theme === "dark" ? "bg-secondary1/75  border-secondary2 hover:bg-black" : "bg-secondary_light1/75 border-secondary_light2 hover:bg-white"} mobile:w-11/12  mobile2:h-custom_h_3`}>
            <header className="pt-8  flex justify-center items-center flex-col">
                <h3 className={`font-medium w-3/4 text-pink-500 text-start text-xl `}>{title}</h3>
                <p className="text-gray-500 pt-2 w-3/4 text-start">{subtitle}</p>
            </header>
            <section className="pt-4  w-full flex justify-center items-center ">
                <p className={`w-3/4 cursor-text ${theme === "dark" ? "text-white" : "text-black"} mobile:text-sm`}>{description}</p>
                
            </section>
        </div>
    )
}