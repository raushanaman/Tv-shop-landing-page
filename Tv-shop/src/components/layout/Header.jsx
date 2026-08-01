
import { NavLink } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import navigationLinks from "../../constants/navigation";

const Header = () => {
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
                                <NavLink 
                                to ={link.path}
                                className={({isActive})=>
                                `font-medium transition-colors duration-300  ${isActive ? "text-blue-600" : "text-slate-600 hover:text-orange-600"}`
                                }>
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}


                    </ul>

                    <Button>Buy Now</Button>


                </nav>
            </Container>


        </header>
    )
}

export default Header;