import { configureStore } from "@reduxjs/toolkit";
import items from './ItemsSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        items,
        cart
    },
})