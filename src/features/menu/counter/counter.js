import {selectDisheById, modifyCount} from "../menu-slice";
import { useSelector, useDispatch } from "react-redux";
import {useState, useEffect} from "react";
import "./counter.css";

export function Counter(props){

    
    const dispatch=useDispatch();
    const id=props.id;
    const dish=useSelector(state=>selectDisheById(state, id));
    const count=dish.selected;
    const [newCount, setNewCount]=useState(0);

    useEffect(()=>{
        setNewCount(0);
    },[count])
    
    const reduceSelected = () => {
        if(newCount > 0)
        {
             setNewCount((prevCount)=>prevCount-1);
        }  
    }

    const addSelected = () => {
        if(newCount >= 0 && newCount <10)
        {
            setNewCount((prevCount)=>prevCount+1);
        }
    }

    const dispatchNewCount = () => {
        dispatch(modifyCount({id:id, changes:{selected: newCount}}));

    }
    
    const setCountToZero = () => {
        setNewCount(0);
        dispatch(modifyCount({id:id, changes:{selected: 0}}));
    }
    
    return(<div>
        {count==0 && <div id="div-reduce-add-buttons">
            <button onClick={reduceSelected}>-</button>
            <span>{newCount}</span>
            <button onClick={addSelected}>+</button>
            <button className="dispatch-selected" onClick={dispatchNewCount}>Add to Cart</button></div>
        } 
            
        {count>0 && <button className="button-background-red" onClick={setCountToZero}>Remove {count}</button>}
    </div>)
}