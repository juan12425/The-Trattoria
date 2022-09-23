import {createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import {dishes} from "./default-dishes";

export const retreiveMenu=createAsyncThunk("menu/FetchRecipes", async () =>{
    const responseJSON = await fetch("http://localhost:8000/API/dishesAPI");
    const response=await responseJSON.json();
    return response;
});

const menuAdapter= createEntityAdapter()

const initialState = menuAdapter.getInitialState( {
    status: 'idle',
    ids:[0,1,2,3],
    entities: dishes
  });
  
const menuSlice=createSlice({
    name: "menu",
    initialState,
    reducers : {
        modifyCount: menuAdapter.updateOne, 
    },
    extraReducers: (builder) => {
        builder.addCase(retreiveMenu.pending, (state)=>{
            state.status = "loading";
        }).addCase(retreiveMenu.fulfilled, (state, action) =>{
            state.status = "idle";
            menuAdapter.addMany(state, action.payload);
        })
    }
});

export const getTotalCount = dishes => {
    let totalSelected=0;
    dishes.forEach(dish => totalSelected+=dish.selected);
    return totalSelected;
}

export const {modifyCount}=menuSlice.actions;
export const selectStatus= state => state.menu.status;
export const { selectAll: selectAllDishes, selectById: selectDisheById }=menuAdapter.getSelectors(state => state.menu);

export default menuSlice.reducer;