import {Search} from "lucide-react";

const SearchBar = ({search , onSearch})=>{
    return (
        <div className="relative w-full md:w-80">
            <Search size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>

            <input type="text"
                    value={search}
                    onChange={(e)=>onSearch(e.target.value)}

                    placeholder="Search TV..."
                    className="w-full rounded-lg border border-slate-300 py-3 pl-12 pr-4 text-slate-700 outline-none ring-blue-600 transition-all focus:ring-2 md:w-80"
            />

        </div>
    )
}

export default SearchBar;