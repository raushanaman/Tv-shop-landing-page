import Container from "../ui/Container";
import Button from "../ui/Button";
import navigationLinks from "../../constants/navigation";

const Navbar = () => {
    return (

        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">

            <Container>

                <nav className="flex h-20 items-center justify-between">
                    {/*  add logo */}
                    
                    <h1 className="text-2xl font-bold text-orange-600">
                        TV Shop
                    </h1>

                    {/* navigation */}

                    <ul className="hidden items-center gap-8 md:flex">

                        {navigationLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.path} className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600">
                                    {link.title}
                                </a>
                            </li>
                        ))}


                    </ul>

                    <Button>Buy Now</Button>


                </nav>
            </Container>


        </header>
    )
}

export default Navbar;