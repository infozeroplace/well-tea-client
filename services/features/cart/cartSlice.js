import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, weight, quantity, addOns } = action.payload;
            const existingItems = state.items.find((item) => item.id === id);
            if(existingItems) {
                existingItems.weight += weight;
                existingItems.quantity += quantity;
                existingItems.addOns = [...existingItems.addOns, ...addOns];
            } else {
                state.items.push({ id, name, price, weight, quantity, addOns });
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter((item) => item.id !== productId);
        },
        clearCart: (state)=> {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
