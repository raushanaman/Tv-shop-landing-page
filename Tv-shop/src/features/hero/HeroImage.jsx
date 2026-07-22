import heroTv from "../../assets/images/hero-tv.png";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center py-10">
      {/* Background circle */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-80 w-80 rounded-full bg-blue-100 blur-3xl"></div>
      </div>       
      
       {/* image */}
      <img src={heroTv} alt="Premium Smart Tv"
       className="relative z-10 w-full max-w-[550px] transition-transform duration-500 hover:scale-105"   
      />

      <div className="absolute left-0 top-16 z-20 rounded-2xl bg-white/90 p-5 shadow-2xl backdrop-blur-md">
        <p className="text-sm text-slate-500">
          Special Offer
        </p>

        <p className="mt-2 text-sm text-slate-600">
          On Premium Smart TVs
        </p>

        <h3 className="text-3xl font-bold text-red-500">
          35% OFF
        </h3>
      </div>
      {/* Rating Card */}

      <div className="absolute bottom-12 right-0 z-20 rounded-2xl bg-white/90 p-5 shadow-2xl backdrop-blur-md">

        <div className="text-xl text-yellow-500">
          ⭐⭐⭐⭐⭐
        </div>

        <h4 className="mt-2 text-lg font-semibold text-slate-900">
          4.9 Rating
        </h4>

        <p className="text-sm text-slate-500">
          Trusted by 10k+ Customers
        </p>

      </div>


    </div>
  );
};

export default HeroImage;