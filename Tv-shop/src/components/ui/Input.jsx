const Input =  ({
    type = "text",
    placeholder,
    value,
    onChange,
})=>{
    return (
        <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-5
            py-4
            outline-none
            transition-all
            duration-300
            focus:border-blue-600
        "/>
    )
}
export default Input;