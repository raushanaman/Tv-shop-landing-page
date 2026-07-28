import Container from "../../components/ui/Container";
import OfferBanner from "./OfferBanner";

import offer from "../../constants/offers";

const Offer = () => {
  return (
    <section className="py-24">

      <Container>

        <OfferBanner offer={offer} />

      </Container>

    </section>
  );
};

export default Offer;