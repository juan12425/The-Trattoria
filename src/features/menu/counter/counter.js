import {selectDisheById, modifyCount} from "../menu-slice";
import { useSelector, useDispatch } from "react-redux";
import {useState} from "react";

export function Counter(props){

    
    const dispatch=useDispatch();
    const id=props.id;
    const dish=useSelector(state=>selectDisheById(state, id));
    const selected=dish.selected;
    const count=dish.selected;
    const [newCount, setNewCount]=useState(count);
    
    const reduceSelected = () => {
        if(newCount > 0)
        {
             setNewCount((prevCount)=>prevCount-1)
        }  
    }

    const addSelected = () => {
        if(newCount >= 0 && newCount <10)
        {
            setNewCount((prevCount)=>prevCount+1)
        }
    }

    const dispatchNewCount = () => {
        dispatch(modifyCount({id:id, changes:{selected: newCount}}))
    }
 
    
    return(<div>
        <button onClick={reduceSelected}>-</button>
        <span>{newCount}</span>
        <button onClick={addSelected}>+</button>

        <button onClick={dispatchNewCount}>Add to Cart</button>
    </div>)
}