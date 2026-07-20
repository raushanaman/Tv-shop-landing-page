import { Children } from "react";

const Button = ({
    children,
    variant = "primary",
    type = "button",
    onclick,
})=>{
    const baseStyles = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300";

    const variants ={
        primary: "bg-blue-600 text-white hover:bg-blue-700 active:scale-95",

        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:scale-95",

        outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    };

    return (
        <button type={type} onClick={onclick}
        className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </button>
    )

};
export default Button;
