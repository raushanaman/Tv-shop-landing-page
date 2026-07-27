import { ArrowRight } from "lucide-react";

const CategoryCard = ({ category }) => {
    // const Icon = category.icon;

    return (
        <div
            className="
            group
            cursor-pointer
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            text-center
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-blue-500
            hover:shadow-xl
            "
        >
            {/* images */}
                <div className="relative h-56 overflow-hidden">

                    <img
                        src={category.image}
                        alt={category.title}
                        className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                        "
                    />

                
                <div className="absolute 
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    to-transparent
                "/>
                    {/* product count */}

                    <div className="
                        absolute right-4
                        top-4
                        rounded-full
                        bg-white/90
                        px-3
                        py-1
                        text-sm
                        font-semibold
                    ">
                        {category.products} Models
                    </div>
                </div>
               
                {/* content */}

                <div className="p-6">
                    <h3 className="text-xl font font-bold">{category.title}</h3>
                    <p className="mt-2 text-slate-500">
                        {category.description}
                    </p>

                    <button
                        className="
                        mt-6
                        flex
                        items-center
                        gap-2
                        font-semibold
                        text-blue-600
                        "
                    >
                        Explore

                        <ArrowRight
                            size={18}
                            className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-2
                            "
                        />

                    </button>
                </div>
        </div>
    )
}

export default CategoryCard;