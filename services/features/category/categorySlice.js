import { createSlice } from "@reduxjs/toolkit";

const initialCategory = typeof window !== "undefined" ? localStorage.getItem("selectedCategory") : null;

const categorySlice = createSlice({
    name: "category",
    initialState: {
        selectedCategory: initialCategory || "Green Tea",
    },
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
            localStorage.setItem("selectedCategory", action.payload)
        }
    }
})

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;