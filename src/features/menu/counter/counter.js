import {selectDisheById, modifyCount} from "../menu-slice";
import { useSelector, useDispatch } from "react-redux";

export function Counter(props){

    const dispatch=useDispatch();
    const id=props.id;
    const dish=useSelector(state=>selectDisheById(state, id));
    const selected=dish.selected;
    const count=dish.selected;

    
    const reduceSelected = () => {
        if(count > 0)
        {
            let newCount=count-1;
            dispatch(modifyCount({id:id, changes:{selected: newCount}}))
        }  
    }

    const addSelected = () => {
        if(count >= 0 && count <10)
        {
            let newCount=count+1;
            dispatch(modifyCount({id:id, changes:{selected: newCount}}))
        }
    }

 
    
    return(<div>
        <button onClick={reduceSelected}>-</button>
        <span>{selected}</span>
        <button onClick={addSelected}>+</button>
    </div>)
}