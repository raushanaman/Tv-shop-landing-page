const Badge = ({children,variant="primary"})=>{
    const variants = {
        primary: "bg-blue-600 text-white",
        success: "bg-green-600 text-white",
        danger: "bg-red-600 text-white",
        warning: "bg-yellow-600 text-white",
    };

    return (
        <span 
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]}`}
        >{children}</span>
    )
}

export default Badge;