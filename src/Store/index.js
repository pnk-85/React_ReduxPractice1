import { configureStore } from "@reduxjs/toolkit";
import interfaceSlice from "./interfaceSlice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer : { ui : interfaceSlice.reducer, cart : cartSlice.reducer}
});


export default store;