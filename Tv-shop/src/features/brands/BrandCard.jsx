const BrandCard = ({ brand }) => {
    return (

        <div className="
            group
            flex
            cursor-pointer
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-blue-500
            hover:shadow-xl
        
        ">
            <img src={brand.logo} alt={brand.name}
                className="
            h-14
            w-auto
            object-contain
            transition-transform
            duration-300
            group-hover:scale-110
            "
            />
            <h3 className="mt-6 text-lg font-semibold">
                {brand.name}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
                {brand.products} Products
            </p>

        </div>
    )
}
export default BrandCard;