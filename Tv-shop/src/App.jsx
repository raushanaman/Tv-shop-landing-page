import Container from "./components/ui/Container";
import Button from "./components/ui/Button";
import SectionTitle from "./components/ui/SectionTitle";


const App = () => {
  return(
    <main className="min-h-screen bg-gray-100 py-20">

    <Container>
      <SectionTitle subtitle={"Premium Collection"}
      title={"Welcome to TV Shop"}
      />
      <div className="flex justify-center gap-5"> 

        <Button>Buy Now</Button>
        <Button variant="secondary">Explore TVs</Button>
        <Button variant="outline">Learn More</Button>
      </div>


    </Container>

    </main>
  )
}
export default App;