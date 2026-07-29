import Container from "../../components/ui/Container";
import NewsletterForm from "./NewsletterForm";

const Newsletter = () => {
  return (
    <section
      className="
        py-24
        bg-slate-100
      "
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold">

            Stay Updated

          </h2>

          <p className="mt-4 text-slate-600">

            Subscribe to receive exclusive TV deals,
            offers and latest launches.

          </p>

          <NewsletterForm />

        </div>

      </Container>
    </section>
  );
};

export default Newsletter;