
const FeatureItem = ({icon: Icon, title})=>{

    return(
        <div className="flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-300 hover: bg-blue-50">

            <Icon size={20} className="text-blue-600"/>

            <span className="text-sm font-medium text-slate-700">{title}</span>


        </div>
    )
}

export default FeatureItem;