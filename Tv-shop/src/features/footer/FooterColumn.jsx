const FooterColumn = ({ title, items }) => {
    return (
        <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
                {title}
            </h3>
                <ul className="space-y-3">
                    {items.map((item,index)=>(

                        <li 
                        key={index}
                        className="
                        cursor-pointer
                        text-slate-400
                        transition-colors
                        duration-300
                        hover:text-white
                        "
                        >
                            {item}
                        </li>
                    ))}

                </ul>
        </div>
    )
}
export default FooterColumn;