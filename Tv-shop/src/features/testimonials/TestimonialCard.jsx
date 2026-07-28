import { Quote } from "lucide-react";

import StarRating from "./StarRating";

const TestimonialCard = ({review})=>{

    return (
        <div
            className="
                rounded-3xl
                bg-white
                p-8
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
            "
        >
        <Quote
        size={40}
        className="text-blue-500"
      />

      <p className="mt-6 leading-7 text-slate-600">
        "{review.review}"
      </p>
     <StarRating rating={review.rating} />

        <img src={review.image} alt={review.name}
            className="
            h-14 w-14
            rounded-full
            object-cover
            "
        />
        <div >
            <h4 className="font-bold">
                {review.name}
            </h4>

            <p
             className="text-sm text-slate-500"
            >{review.role}</p>


        </div>

        </div>
    )
}

export default TestimonialCard;