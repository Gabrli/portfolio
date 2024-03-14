import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"
import ButtonContact from "./buttonContact"
import { useTranslation } from "react-i18next";

export default function Footer(){
    const theme = useContext(themeContext)
    const { t } = useTranslation()
    return (
        <footer id="footer" className={`w-full h-custom_h_4  ${theme === "dark" ? "bg-secondary1  " : "bg-secondary_light1 "}`}>
            <h4 className={`font-medium text-3xl pt-2 pl-3 ${theme === "dark" ? "text-white" : "text-black"}`}>{t("get_in_touch")}</h4>
            <p className="pl-3 pt-1 text-gray-500">{t("get_in_subtext")}</p>
            <div className="w-1/2 grid items-center pl-3 grid-cols-4 gap-3 pt-4 mobile:grid-cols-1">
                <ButtonContact href="mailto:gabrys.wisniewski@op.pl" content={t("btn_email")}/>
                <ButtonContact href="https://useme.com/pl/roles/contractor/gabrieldev,302544/" content="Useme"/>
                <ButtonContact href="https://www.facebook.com/profile.php?id=100082353475093" content="Facebook"/>
                <ButtonContact href="tel:+48694638608" content={t("btn_tel")}/>
                
            </div>
        </footer>
    )
}