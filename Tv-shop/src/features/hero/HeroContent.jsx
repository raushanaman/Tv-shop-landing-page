import Button from "../../components/ui/Button";
import HeroButtons from "./HeroButtons";
import Rating from "../../components/ui/Rating";
import HeroFeatures from "./HeroFeatures";

const HeroContent = () => {
  return (
    <div>
      {/* Badge */}
      <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
        #1 Smart TV Store
      </span>

      {/* Heading */}
      <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
        Experience
        <span className="block text-blue-600">
          <span className="text-orange-500">Cinema</span> at Home
        </span>
      </h1>

      {/* Paragraph */}
      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        Discover the latest 4K, OLED and QLED Smart TVs with
        stunning picture quality, immersive sound and exclusive
        offers. Upgrade your entertainment experience today.
      </p>

      {/* Buttons */}
      <HeroButtons/>
      <Rating/>

      {/* Features */}
      <HeroFeatures/>
      
    </div>
  );
};

export default HeroContent;