import { useTranslation } from "react-i18next";
export default function ButtonPortfolio(){
    const { t } = useTranslation()
    return (
        <button className="btn_hero pl-16 font-medium pr-16 pb-3 pt-3 bg-pink-500 rounded-lg text-white  mobile:w-11/12"><a href="#portfolio">{t("btn_portfolio")}</a></button>
    )
}