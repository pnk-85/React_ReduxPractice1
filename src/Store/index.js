import { configureStore } from "@reduxjs/toolkit";
import interfaceSlice from "./interfaceSlice";

const store = configureStore({
    reducer : { ui : interfaceSlice.reducer}
});


export default store;