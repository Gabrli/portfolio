import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"
import { useTranslation } from "react-i18next";
import HeroImg from '../../assets/hero.svg'
import ButtonPortfolio from "./buttonPortfolio"
import ButtonContact from "./buttonContact"
export default function Hero(){
    const theme = useContext(themeContext)
    const { t } = useTranslation();

   return (
    <div className="w-full flex justify-evenly items-center   h-screen mobile:flex-col mobile:items-start ">
    <section className="mobile:w-full">
        <h1 className={`text-7xl font-bold ${theme === "dark" ? "text-white" : "text-black "} mobile:pl-6 mobile:text-4xl`}>
            <section className="flex justidy-center items-center gap-3 ">{t("hero_title1")} <p className="text-pink-500">Frontend</p></section> {t("hero_title2")}
        </h1>
        <p className="text-gray-500 font-medium pt-6 mobile:pl-6">{t("hero_subtitle")}</p>
        <div className="pt-4 flex justify-start items-center gap-3 mobile:flex-col">
            <ButtonPortfolio/>
            <ButtonContact/>
        </div>
    </section>
    <section className="w-1/4 mobile:hidden">
        <img src={HeroImg} alt="hero image"/>
    </section>
</div>
   )
}