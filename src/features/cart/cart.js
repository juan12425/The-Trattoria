import "./cart.css"
import {selectAllDishes, getTotalCount} from "../menu/menu-slice";
import { useSelector } from "react-redux";

export function Cart()
{
    const dishes=useSelector(selectAllDishes);
    const totalCount=getTotalCount(dishes);
    return(
        <li><a href="#order-div"><img id="cart-img" src={require("../../images/sp-cart.png")}/><span>{totalCount}</span></a></li>
    );
}