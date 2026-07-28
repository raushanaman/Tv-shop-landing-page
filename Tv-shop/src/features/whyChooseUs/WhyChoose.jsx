import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import WhyChooseUs from "../../constants/whtChooseUs";
import FeatureCard from "./FeatureCard";
import FeaturedCard from "./FeatureCard";

const WhyChoose = ()=>{
    return (

        <section className="bg-slate-50 py-24">

            <Container>
                <SectionTitle title="Why Choose TV Shop"
                 subtitle="We provide the best shopping experience with premium service and trusted brands."
                />

                <div
                 className="
                mt-14
                grid
                gap-8
                md:grid-cols-2
              "
                >
                    {WhyChooseUs.map((feature)=>(
                        <FeatureCard key={feature.id}
                        feature={feature}
                        />
                    ))}


                </div>
            </Container>

        </section>
    )
}

export default WhyChoose;