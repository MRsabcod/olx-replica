import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    count:0
}

const prodsSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        updateCart: (state, action) => {
            state.cart?.push(action.payload)
            console.log(state.cart)
            state.count+=1
         
            
        },
        removeCartItem: (state, action) => {
console.log(state.cart[action.payload.id].id,action.payload.prod.id)





state.cart[action.payload.id].id===action.payload?.prod.id?state.cart.splice(action.payload.id,1):""

      if(state.cart.length===0)
      {
        state.count=0;
    }
    else{
        state.count-=1
    }
    
                    // console.log(newstate.cart)
            // (state.cart.splice(state.cart.indexOf(action.payload),1))
            // console.log((state.cart.splice(state.cart.indexOf(action.payload),1)),state.cart.indexOf(action.payload))
    }
}})  

export const {updateCart,removeCartItem}=prodsSlice.actions;


export default prodsSlice.reducer;