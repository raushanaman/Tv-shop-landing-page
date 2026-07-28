// import Container from "./components/ui/Container";
 //import Button from "./components/ui/Button";
// import SectionTitle from "./components/ui/SectionTitle";
//import SPACING from "./constants/spacing";
import COLORS from "./constants/colors";
import Navbar from "./components/layout/Navbar";
import Hero from "./features/hero/Hero"
import HeroContent from "./features/hero/HeroContent";
import HeroImage from "./features/hero/HeroImage";
import FeaturedTvs from "./features/featuredTV/FeaturedTvs";
import Categories from "./features/categories/Categories";
import TopBrands from "./features/brands/TopBrands";
import WhyChoose from "./features/whyChooseUs/WhyChoose";

const App = () => {
  return(
    <>
    <Navbar/>
    {/* <main className={`${COLORS.background} min-h-screen`}> */}
  <Hero/>
  <FeaturedTvs/>
  <Categories/>
  <TopBrands />
  <WhyChoose/>
  {/* </main>  */}

      </>
  )
}
export default App;