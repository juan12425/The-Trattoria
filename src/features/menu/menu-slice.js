import {createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit";


export const retreiveMenu=createAsyncThunk("menu/FetchRecipes", async () =>{
    const responseJSON = await fetch("http://localhost:8000/API/dishesAPI");
    const response=await responseJSON.json();
    console.log(response);
    return response;
});

const menuAdapter= createEntityAdapter()

const initialState = menuAdapter.getInitialState( {
    status: 'idle',
  });
  
const menuSlice=createSlice({
    name: "menu",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(retreiveMenu.pending, (state)=>{
            state.status = "loading";
        }).addCase(retreiveMenu.fulfilled, (state, action) =>{
            state.status = "idle";
            menuAdapter.addMany(state, action.payload);
        })
    }
});

export const selectStatus= state => state.menu.status;
export const { selectAll: selectDishes, selectById: selectDishesById }=menuAdapter.getSelectors(state => state.menu);

export default menuSlice.reducer;