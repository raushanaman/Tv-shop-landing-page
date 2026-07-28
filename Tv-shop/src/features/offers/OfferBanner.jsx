import Button from "../../components/ui/Button";
import CountdownTimer from "./CountdownTimer";

const OfferBanner = ({ offer }) => {
  return (
    <div
      className="
        rounded-3xl
        bg-gradient-to-r
        from-blue-600
        to-indigo-700
        px-10
        py-16
        text-center
        text-white
      "
    >
      <span
        className="
          rounded-full
          bg-white/20
          px-4
          py-2
          text-sm
        "
      >
        🔥 {offer.discount}
      </span>

      <h2 className="mt-6 text-4xl font-bold">

        {offer.title}

      </h2>

      <p className="mt-4 text-lg text-blue-100">

        {offer.subtitle}

      </p>

      <CountdownTimer
        endDate={offer.endDate}
      />

      <div className="mt-10">

        <Button variant="secondary">

          Shop Now

        </Button>

      </div>

    </div>
  );
};

export default OfferBanner;