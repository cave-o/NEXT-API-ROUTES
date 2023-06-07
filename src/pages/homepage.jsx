import Services from "@/cmps/services"
import HomeSwiper from "@/cmps/home-swiper"
import HomeAbout from "@/cmps/home-about"
import HomePackage from "@/cmps/home-package"
import HomeOffer from "@/cmps/home-offer"

function HomePage() {
    return (
        <div className="home-page">
            <HomeSwiper />
            <Services />
            <HomeAbout />
            <HomePackage />
            <HomeOffer />
        </div>
    )
}

export default HomePage