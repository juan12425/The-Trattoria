import "./dish.css";

export function Dish(props)
{
    return(<div className="dish-div">
        <h3 className="dish-title">{props.title}</h3>
        <img className="dish-img" src={props.src}/>
        <p className="dish-description">{props.description}</p>
    </div>);
}