import { createSlice, createSelector } from "@reduxjs/toolkit";

// we define an initial state for the items that we are about to store
const initialState = {
  wishListItems: [], // now any item from the wish list will be stored in this empty array
  movableItems: [], // New state for movable items
  cartItems: [], // manage the state of the cart items that have added
  quantity: 0, //The initial value for the quantity must be zero
};

// I will be needing a local storage here so that the user wont open the open the app alway and see that there are not items there
// while he added items there previously

// we have to create our slice
const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const { id, imageSource, brandName, product, price } = action.payload;
      // I am not going handle the items in any way
      state.wishListItems.push({
        id,
        imageSource,
        brandName,
        product,
        price,
      });
    },
    removeFromWishList: (state, action) => {
      const itemIdToRemove = action.payload;
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
    addToMovableItems: (state, action) => {
      const { id, imageSource, brandName, product, price, description } =
        action.payload;

      // Check if the item already exists in movableItems
      const existingItemIndex = state.movableItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        // If the item exists, remove it
        state.movableItems.splice(existingItemIndex, 1);
      }

      // Add the new item to the beginning of movableItems
      state.movableItems.unshift({
        id,
        imageSource,
        brandName,
        product,
        price,
        description,
      });
    },

    addItemsToCartScreen: (state, action) => {
      const { id, imageSource, brandName, product, price } = action.payload;

      // Check if the item already exists in cartItems
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += 1;
        // If the item exists, update its quantity
      } else {
        // If the item doesn't exist, add it to cartItems with a quantity of 1
        state.cartItems.push({
          id,
          imageSource,
          brandName,
          product,
          price,
          quantity: 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        // Use the existingItemIndex to directly access the item
        state.cartItems[existingItemIndex].quantity += 1;
        // Split the price into dollars and cents
        // Update the price based on quantity
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity - 1;

          // Split the price into dollars and cents

          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });

      // Remove the item if quantity becomes 0
      const filteredCartItems = updatedCartItems.filter(
        (item) => item.quantity !== 0
      );

      return { ...state, cartItems: filteredCartItems };
    },

    removalCartItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
  },
});

export const {
  addToWishList,
  removeFromWishList,
  addToMovableItems,
  removalCartItem,
  addItemsToCartScreen,
  decreaseQuantity,
  increaseQuantity,
} = wishListSlice.actions;
export default wishListSlice.reducer;

export const selectedSubTotal = (state) =>
  state.wishlist.cartItems.reduce(
    (acc, cartItems) => acc + cartItems.price * cartItems.quantity,
    0
  );

export const numOfSelectedItems = (state) => state.wishlist.cartItems.length;

export const selectedDeliveryFee = createSelector(
  selectedSubTotal,
  (subTotal) => (subTotal === 0 ? 0 : 20)
);

export const selectedTotal = createSelector(
  selectedSubTotal,
  selectedDeliveryFee,
  (subtotal, deliveryFee) => subtotal + deliveryFee
);
