import FilterChip from "./FilterChip";

const categories = ["All","OLED","QLED","LED"];

const FilterBar = ({
    selectedCategory, onCategoryChange,
}) =>{
    return (
        <div className="mt-10 flex flex-wrap gap-3">

            {categories.map((category)=>(
                <FilterChip 
                key={category}
                label={category}
                active={selectedCategory === category}
                onClick={() => onCategoryChange(category)}/>
            ))}

        </div>
    )
}

export default FilterBar;