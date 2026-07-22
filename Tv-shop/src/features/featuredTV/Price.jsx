const Price = ({price, oldPrice})=>{
    return (
        <div className="mt-3 flex items-center gap-3">

            <span className="text-2xl font-bold text-slate-900">
                ₹{price.toLocaleString()}
            </span>

            <span className="text-lg text-slate-400 line-through">
                ₹{oldPrice.toLocaleString()}
            </span>
        </div>
    )
}

export default Price;