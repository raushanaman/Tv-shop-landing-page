const FeatureCard = ({feature})=>{
    const Icon = feature.icon;

    return (
        <div
            className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-600
        hover:shadow-xl
      "
        >
            <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-blue-50
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:rotate-6
                group-hover:bg-blue-600
            "
            >
            <Icon
                size={30}
                className="
                text-blue-600
                transition-colors
                duration-300
                group-hover:text-white
            "
            />

            </div>

            <h3 className="mt-6 text-xl font-bold">
                {feature.title}
            </h3>

            <p
                className="mt-3 leading-7 text-slate-600"
            >{feature.description}</p>

        </div>
    )
}
export default FeatureCard;