const SectionTitle = ({title, subtitle})=>{
    return (
        <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                {subtitle}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
                {title}
            </h2>
        </div>
    )
}

export default SectionTitle;