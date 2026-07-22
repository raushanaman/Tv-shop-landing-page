import { Star } from "lucide-react";


const Rating = ({ rating, reviews }) => {

    const totalStars = 5;

    return (
        <div className="mt-10 flex items-center gap-4">

            {/* stars */}

            <div className="flex items-center gap-1">
                {[...Array(totalStars)].map((_, index) => (

                    <Star
                        key={index}
                        size={19}
                        className="fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            {/* Ratings details */}

            <div>
                <h4 className="font-semibold text-slate-900">
                   
                <span>{rating}</span>

                <span>({reviews} Reviews)</span>
                </h4>

                <p className="text-sm text-slate-500">
                    Trusted by 10,000+ Customers
                </p>

            </div>
        </div>
    )
}

export default Rating;