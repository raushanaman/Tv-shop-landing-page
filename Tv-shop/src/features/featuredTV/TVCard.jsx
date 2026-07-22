import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import HeroRatings from "../hero/HeroRatings";
import Price from "./Price";

const TVCard = ({product})=>{
    return (
        <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm tranitional-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Badge */}

            <Badge variant="pirmary">
                {product.badge}
            </Badge>

            {/* tv image */}

            <div className="mt-5 flex justify-center overflow-hidden">
                <img src={product.image} alt={product.name} 
                    className="h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                />


            </div>
            {/* Product Name */}

            <h3 className="mt-5 text-xl font-bold text-slate-900">
                {product.name}
            </h3>

            {/* Rating */}
            <HeroRatings/>

            {/* price */}

            <Price price={product.price} 
            oldPrice = {product.oldPrice}/>

            <div className="mt-6">
                <Button className="w-full">
                    View Details
                </Button>
            </div>


        </div>

    )
}
export default TVCard;