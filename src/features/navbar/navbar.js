import "./navbar.css";
import { Cart } from "../cart/cart";

export function NavBar(){
    return(
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#menu-title">Menu</a></li>
                <li><a href="#">Book a Table</a></li>
                <li><a href="#contact-div">Contact</a></li>
                <Cart/>
            </ul>
        </nav>
    );
}