import { useTranslation } from "react-i18next";
export default function ButtonContact(){
    const { t } = useTranslation()
    return(
        <button className={`btn_contact pl-10 pr-10 pt-3 pb-3 font-medium bg-pink-300 text-white rounded-lg mobile:w-11/12`}><a href="#footer">{t("btn_contact")}</a></button>
    )
}