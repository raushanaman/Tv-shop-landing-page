import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import testimonials from "../../constants/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = ()=>{
    return (
        <section className="py-24 bg-slate-50">

            <Container>

                <SectionTitle
                  title="What Our Customers Say"
                  subtitle="Trusted by thousands of happy customers."
                />

                <div className="
                    mt-14
                    grid gap-8
                    md:grid-cols-2
                    lg-grid-cols-3
                ">
                    {testimonials.map((review)=>(
                        <TestimonialCard
                        key={review.id}
                        review={review}
                        />
                    ))}


                </div>
            </Container>


        </section>
    )
}

export default Testimonials