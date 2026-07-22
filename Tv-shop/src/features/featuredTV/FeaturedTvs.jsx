import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import TVCard from "./TVCard";
import tvProducts from "../../constants/tvProduct";

const FeaturedTvs = () => {
    return (
        <section className="py-24">

            <Container>

                <SectionTitle title="Featured Smart TVs"
                subtitle="Explore our premium collection of Smart TVs from top brands."/>

                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {tvProducts.map((product)=>(
                        <TVCard key={product.id}
                        product={product}/>
                    ))}


                </div>
            </Container>


        </section>
    )
}

export default FeaturedTvs;