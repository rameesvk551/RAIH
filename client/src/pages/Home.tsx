import BlogSection from "../components/HomeComponents/BlogSection"
import CallToActionSection from "../components/HomeComponents/CallToActionSection"
import DiscoverSection from "../components/HomeComponents/DiscoverSection"
import FeaturesSection from "../components/HomeComponents/FeaturesSection"
import HeroSection from "../components/HomeComponents/HeroSection"
import Navbar from "../components/Navbar"

const HomePage = () => {
  return (
    <div className=' bg-gradient-to-b from-blue-100 to-white '>
      <Navbar/>
        <HeroSection />
            <FeaturesSection />
            <DiscoverSection/>
            <BlogSection/>
            <CallToActionSection />
       
    </div>
  )
}

export default HomePage
