import Offer from "./offer";
import WebAppImg from '../../assets/webapp.png'
import WebsiteImg from '../../assets/website.png'
import SeoImg from '../../assets/seo.png'
import UIImg from '../../assets/ui.png'
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { useTranslation } from "react-i18next";
export default function OfferList(){
    const { t } = useTranslation()
    return (
       <TECarousel  className="pt-16" showControls showIndicators ride="carousel">
         <div className="relative  w-3/4 ml-auto mr-auto overflow-hidden after:clear-both after:block after:content-['']">
       
        <TECarouselItem itemID={1}  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <div className="flex justify-center items-center gap-2 mobile:flex-col">
          <Offer title={t("web_app_title")} img={WebAppImg} description={t("web_app_description")}/>
        <Offer title={t("www_title")} img={WebsiteImg} description={t("www_description")}/>
          </div>
        </TECarouselItem>
        <TECarouselItem itemID={2}  className="relative float-left  -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <div className="flex justify-center items-center gap-2 mobile:flex-col">
          <Offer title="SEO" img={SeoImg} description={t("seo_description")}/>
          <Offer title={t("ui_title")} img={UIImg} description={t("ui_description")}/>
          </div>
        </TECarouselItem>
     
        
        </div>
       </TECarousel>
    )
}