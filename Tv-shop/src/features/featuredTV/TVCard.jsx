import {Heart} from "lucide-react";

import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Rating from "../../components/ui/Rating";
import Price from "./Price";

const TVCard = ({product})=>{

    const discountPrecentage = Math.round(
        ((product.oldPrice-product.price)/product.oldPrice)*100
    )

    const badgeVariant = {
        "Best Seller": "primary",
        "New Arrival": "success",
        "Top Rated": "warning",
    }
    return (
        <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm tranitional-all duration-300 hover:-translate-y-2 hover:shadow-2xl">


            {/* WishList */}

            <button className=
            "absolute right-5 top-5 rounded-full bg-white p-2 shadow-md transition hover:bg-red-50">

                <Heart size={20}
                className="text-slate-500 transition hover:fill-red-500 hover:text-red-500"/>
            </button>
            {/* Badge */}

            <Badge variant={badgeVariant[product.badge]}>
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
            <Rating
             rating={product.rating}
             reviews = {product.totalReviews}
            />

            {/* price */}

            <Price price={product.price} 
            oldPrice = {product.oldPrice}/>

            {/* Discount */}

            <p className="mt-2 text-sm font-semibold text-green-600">
                Save {discountPrecentage}%
            </p>

            <div className="mt-6">
                <Button className="w-full">
                    View Details
                </Button>
            </div>


        </div>

    )
}
export default TVCard;