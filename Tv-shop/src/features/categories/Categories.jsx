import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import categories from "../../constants/category";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    return(

        <section className="bg-slate-50 py-24">
            <Container>

                <SectionTitle title= "Browse by Category"
                    subtitle="Find your perfect TV based on your needs."
                />

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <CategoryCard key={category.id}
                            category={category} />
                    ))}

                </div>


            </Container>

        </section>
    )
}
export default Categories;