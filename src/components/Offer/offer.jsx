import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"

export default function Offer(props){
    const { title, img, description } = props
    const theme = useContext(themeContext)
    return (
        <div className={` rounded-lg min-w-custom_w_3 max-w-11/12  h-custom_h_2 border ${theme === "dark" ? "bg-secondary1 border-secondary2" : "bg-secondary_light1 border-secondary_light2"} `}>
            <section className="flex justify-between pb-3 items-centet pt-4 pl-3 pr-6 mobile:pl-4">
                <p className="text-pink-500 font-medium text-3xl mobile:text-xl">{title}</p>
                <img className="mobile:w-1/4" src={img} alt=""/>
               
            </section>
            <p className={`pl-6 w-3/4 relative bottom-8  text-gray-500 mobile:bottom-0 mobile:pl-3 mobile:text-sm `}>{description}</p>
        </div>
    )
}