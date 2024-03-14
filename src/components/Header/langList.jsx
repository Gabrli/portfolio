import { useContext, useState } from "react"
import ButtonLang from "./buttonLang"
import { useTranslation } from "react-i18next";
import { themeContext } from "../../contexts/themeContext";

export default function LangList(){
    const [isDrop, setIsDrop] = useState(false)
    const [lang, setLang] = useState("pl")
    const theme = useContext(themeContext)
    const { i18n } = useTranslation();
    return (
        <div className={`${isDrop ? "h-custom_h_5 pt-3" : ""}`}>
            <ButtonLang setIsDrop={setIsDrop} isDrop={isDrop} lang={lang}/>
            <ul className={` flex justify-center items-center rounded-lg ${isDrop ? "pt-3" : "hidden"}`}>
                <li onClick={() => {
                    setLang(lang === "pl" ? "en" : "pl")
                    i18n.changeLanguage(lang === "pl" ? "en" : "pl")
                }} className={`cursor-pointer transition duration-500 ease-in-out rounded text-gray-500 p-2 text-xl border ${
        theme === "dark"
          ? "border-secondary2 bg-black hover:text-white"
          : "border-secondary_light2 bg-white hover:text-black"
      } `}>{lang === "pl" ? "EN" : "PL"}</li>
            </ul>
        </div>
    )
}