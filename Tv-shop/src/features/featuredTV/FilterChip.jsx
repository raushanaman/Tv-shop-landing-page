const FilterChip = ({
    label,
    active,
    onClick,
})=>{
    return (
        <button
            onClick={onClick}
            className={`
                rounded-full px-5 py-2 text-sm font-semibold
                transition-all
                duration-300

                ${active ?"bg-blue-600 text-white": "bg-slate-100 text-slate-700 hover:bg-blue-100"}

                `}
        >{label}</button>
    )
}
export default FilterChip;