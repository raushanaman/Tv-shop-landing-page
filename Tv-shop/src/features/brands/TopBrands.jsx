import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle"

import BrandCard from "./BrandCard";

import brands from "../../constants/brands";

const TopBrands = ()=>{
    return (

        <section className="bg-slate-50 py-24">
            <Container>


                    <SectionTitle
                    title="Top Brands"
                    subtitle="Trusted by millions of customers worldwide."
                    />
                    <div 
                    
                    className="
                    mt-14
                    grid
                    gap-8
                    sm:grid-cols-2
                    lg:grid-cols-3
                    "
                    >
                        {brands.map((brand)=>(
                            <BrandCard key={brand.id}
                            brand={brand}/>
                        ))}

                    </div>

                </Container>

        </section>
    )
}
export default TopBrands;