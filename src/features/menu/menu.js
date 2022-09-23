import {retreiveMenu, selectStatus} from "./menu-slice";
import {useEffect} from "react";
import { Dish } from "./dish/dish";
import { useDispatch, useSelector } from "react-redux";
import {selectAllDishes} from "./menu-slice";

import "./menu.css";

export function Menu()
{
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(retreiveMenu());
    },[])
    
    
    const status=useSelector(selectStatus);
    const dishes=useSelector(selectAllDishes);
    

    return (<div>
        <h2 className="section-title">Menu</h2>
        <div id="dishes-container">
            {dishes.map((dish, index)=>{
                return <Dish id={dish.id} title={dish.title} description={dish.description} src={dish.img_name} key={index} />    
            })
            }  
        </div>
        {status == "loading" && <p className="loading-message">Loading Menu...</p>}
    </div>)
 
}