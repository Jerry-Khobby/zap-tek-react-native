
import {createSlice} from "@reduxjs/toolkit";


// we define an initial state for the items that we are about to store 
const initialState={
    wishListItems:[],// now any item from the wish list will be stored in this empty array 
    movableItems: [], // New state for movable items

}


// I will be needing a local storage here so that the user wont open the open the app alway and see that there are not items there 
// while he added items there previously 



// we have to create our slice
const wishListSlice=createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        addToWishList:(state,action)=>{
            const {id,imageSource,brandName,product,price}=action.payload;
            // I am not going handle the items in any way 
            state.wishListItems.push({
                id,
                imageSource,
                brandName,
                product,
                price,
            })
        },
        removeFromWishList:(state,action)=>{
const itemIdToRemove=action.payload;
state.wishListItems=state.wishListItems.filter(
    (item)=>item.id!==itemIdToRemove
)
},
addToMovableItems: (state, action) => {
    const { id, imageSource, brandName, product, price } = action.payload;
    // Add item to movable items
    state.movableItems.push({
      id,
      imageSource,
      brandName,
      product,
      price,
    });
  },
    }


})


export const {addToWishList,removeFromWishList,addToMovableItems}=wishListSlice.actions;
export default wishListSlice.reducer; 