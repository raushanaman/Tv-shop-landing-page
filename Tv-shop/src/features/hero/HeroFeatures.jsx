import heroFeatures from "../../constants/heroFeatures";

import FeatureItem from "./FeatureItems";

const HeroFeatures = () =>{
    return(
        <div className="mt-10 flex flex-wrap gap-4">

            {heroFeatures.map((feature) =>(
                <FeatureItem 
                key ={feature.id}
                icon={feature.icon}
                title={feature.title}
                />
            ))}

        </div>
    )
}

export default HeroFeatures;