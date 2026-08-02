import {Routes, Route} from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path = "/" element = {<MainLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path = "/products" element = {<Products/>}/>
            <Route path = "/products/:id" element={<ProductDetails/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
            <Route path = "*" element = {<NotFound/>}/>
            </Route>
        </Routes>
    )
}
export default AppRoutes;