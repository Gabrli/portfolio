import AboutCard from "./aboutCard";
import Skills from "./skills";
import { useTranslation } from "react-i18next";

export default function About(){
    const { t } = useTranslation()
    return (
        <section className="w-full  flex  justify-center pt-10 h-3/4 pb-5 items-center flex-wrap">
            <div className="w-full flex justify-center items-center gap-4 pb-3 mobile:flex-col">
                <AboutCard title={t("about_title")} subtitle={t("about_subtitle")} description={t("about_description")}/>
                <AboutCard title={t("carieer_title")} subtitle={t("carieer_subtitle")} description={t("carieer_description")}/>
            </div>
            <Skills/>
        </section>
    )
}