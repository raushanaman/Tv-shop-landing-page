import Container from "../../components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = ()=>{
    return(
        <section className="overflow-hidden bg-slate-50 py-20">

            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <HeroContent/>
                    <HeroImage/>
                </div>
            </Container>


        </section>
    )
}

export default Hero;