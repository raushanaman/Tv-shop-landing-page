import {Star} from  "lucide-react";

const StarRating = ({ rating})=>{
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_,index)=>(
                <Star 
                    key={index}
                    size={18}
                    className= {
                        index < rating ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }
                    />
            ))}


        </div>
    )
}
export default StarRating;