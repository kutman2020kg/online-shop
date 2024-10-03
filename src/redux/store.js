import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counter/countSlice";
import wishReducer from "./wishlist/wishSlice"
import cartReducer from "./cart/cart.Slice"

const myStore = configureStore({
    reducer : {
        counter: countReducer,
        wishList: wishReducer,
        cart: cartReducer,
    }
})

export default myStore