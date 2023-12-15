import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const {item, quantity} = action.payload;
            const itemId = item.id;
            const existingItemIndex = state.cartItems.findIndex(item => item.itemId === itemId);
            
            if (existingItemIndex !== -1) {
                state.cartItems[existingItemIndex].quantity += quantity;
                state.cartItems[existingItemIndex].totalPrice = state.cartItems[existingItemIndex].quantity * item.price;
            } else {
                const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                itemId: action.payload.item.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.item.price
            })
            }
            
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.cartItemId)
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;