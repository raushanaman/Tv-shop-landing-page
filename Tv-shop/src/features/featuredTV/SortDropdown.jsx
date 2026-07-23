const SortDropdown = ({sortBy, onSort})=>{
    return (

        <select value={sortBy}
        onChange={(e) => onSort(e.target.value)}
        className="rouded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600">


            <option value = "default">Default</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="rating">Highest Rating</option>
        </select>
    )
}

export default SortDropdown;