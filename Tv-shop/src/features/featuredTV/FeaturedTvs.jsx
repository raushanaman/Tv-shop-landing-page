import { useMemo, useState } from "react";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import TVCard from "./TVCard";
import tvProducts from "../../constants/tvProduct";
import Button from "../../components/ui/Button";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

const FeaturedTvs = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("default")

    const filteredProducts = useMemo(() => {
        let products = [...tvProducts];

        // category filter
        if (selectedCategory !== "All") {
            products = products.filter((product) => product.category === selectedCategory);
        }

        // search filter

        products = products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase()));

        //sorting

        switch (sortBy) {
            case "low-high":
                products.sort((a, b) => a.price - b.price);
                break;

            case "high-low":
                products.sort((a, b) => b.price - a.price);
                break;

            case "rating":
                products.sort((a, b) => b.rating - a.rating);
                break;

        }
        return products;
    }, [selectedCategory, search, sortBy])
    return (
        <section className="py-24">

            <Container>

                <SectionTitle title="Featured Smart TVs"
                    subtitle="Explore our premium collection of Smart TVs from top brands." />

                <Button>View All</Button>

                {/* Product Count */}

                <p className="mt-4 text-sm text-slate-500">

                    Showing {filteredProducts.length} TVs
                </p>

                {/* Search + Sort */}

                <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <SearchBar
                        search={search}
                        onSearch={setSearch}
                    />

                    <SortDropdown
                        sortBy={sortBy}
                        onSort={setSortBy}
                    />

                </div>

                <FilterBar
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />

                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {filteredProducts.map((product) => (
                        <TVCard key={product.id}
                            product={product} />
                    ))}


                </div>
            </Container>

        </section>
    )
}

export default FeaturedTvs;