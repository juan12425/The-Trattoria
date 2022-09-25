import "./dish.css";
import { useEffect } from "react";
import { Counter } from "../counter/counter";

export function Dish(props)
{
    
    return(<div className="dish-div">
        <h3 className="dish-title">{props.title}</h3>
        <img className="dish-img" src={require("./../../../images/"+props.src)}/>
        <p className="dish-description">{props.description}</p>
        <p>Price: ${props.price}</p>
        <Counter id={props.id}/>
    </div>);
}