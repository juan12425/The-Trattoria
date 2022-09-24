import {selectAllDishes, modifyCount} from "../menu/menu-slice";
import { useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import "./order.css";

export function Order()
{
    
    const dispatch=useDispatch();
    const selectedDishes=useSelector(selectAllDishes).filter(dish=>dish.selected>0);
    const [email, setEmail]=useState("");
    const [cellPhone, setCellPhone]=useState("");
    const [address, setAddress]=useState("");


    const deletePlate=({target})=>{
        const id=target.value;
        dispatch(modifyCount({id:id, changes:{selected: 0}}));
    }

    const preventSubmit=(event)=>{
        event.preventDefault();
        setEmail("");
        setCellPhone("");
        setAddress("");
    }
    return(
        <div id="order-div">
            <h2>Your Order</h2>
            {selectedDishes.map((dish, index)=>{
                const dishTitle=dish.title;
                const dishSelected=dish.selected;
                const dishImgName=dish.img_name;
                const id=dish.id;

                return(<div  className="suborder-div" key={index}>
                    <img className="order-image" src={require("../../images/"+dishImgName)}/>
                    <div>
                        <h3>{dishTitle}</h3>
                        <p>Quantity: {dishSelected}</p>
                        <button className="remove-button" value={id} onClick={deletePlate}>Remove</button>
                    </div>
                </div>
                )
            })}
            {selectedDishes.length > 0 && <div>
                    <h3 id="delivery-title">Delivery Information</h3>
                    <form onSubmit={preventSubmit}>
                        <input onChange={({target})=>{setEmail(target.value)}} value={email} type="text" placeholder="Email"/>
                        <input onChange={({target})=>setCellPhone(target.value)} value={cellPhone} type="text" placeholder="Cell phone"/>
                        <input onChange={({target})=>setAddress(target.value)} value={address} type="text" placeholder="Address"/>
                        <button type="submit" id="complete-order-button">Complete Order</button>
                    </form>
                </div>}
        </div>
    );
}