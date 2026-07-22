// import Container from "./components/ui/Container";
 //import Button from "./components/ui/Button";
// import SectionTitle from "./components/ui/SectionTitle";
//import SPACING from "./constants/spacing";
import COLORS from "./constants/colors";
import Navbar from "./components/layout/Navbar";
import Hero from "./features/hero/Hero"
import HeroContent from "./features/hero/HeroContent";
import HeroImage from "./features/hero/HeroImage";

const App = () => {
  return(
    <>
    <Navbar/>
    <main className={`${COLORS.background} min-h-screen`}>
    {/*

      <section className={SPACING.section}>

    <Container>
      <SectionTitle subtitle={"Premium Collection"}
      title={"Welcome to TV Shop"}
      />
      <div className="flex justify-center gap-5"> 

        <Button>Buy Now</Button>
        <Button variant="secondary">Explore TVs</Button>
        <Button variant="outline">Learn More</Button>
        <Button variant="danger">Sale</Button>
      </div>


    </Container>
  </section>
  */}
  <Hero/>
  {/* <HeroContent/>
  <HeroImage/> */}
  </main> 

      </>
  )
}
export default App;