import {Search, X} from "lucide-react";

const SearchBar = ({search , onSearch})=>{
    return (
        <div className="relative w-full md:w-96">
            <Search size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400
                transition-colors duration-300"
            />

            <input type="text"
                    value={search}
                    onChange={(e)=>onSearch(e.target.value)}

                    placeholder="Search TV..."
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-blue-600
                    
                    focus:shadow-lg focus:shadow-blue-100"
            />

            {/* clear button */}

            {search && (
                <button
                    onClick={()=>onSearch("")}
                    className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    transition
                    hover:text-red-500" 
                ><X size={18}/></button>
            )}

        </div>
    )
}

export default SearchBar;