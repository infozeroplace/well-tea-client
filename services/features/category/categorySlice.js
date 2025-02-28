import { createSlice } from "@reduxjs/toolkit";

const typeList = ["green-tea", "gigner-tea", "organic-tea", "yellow-tea", "black-tea", "herbal-tea"]

const initialCategory = typeof window !== "undefined" ? localStorage.getItem("selectedCategory") : null;

const categorySlice = createSlice({
    name: "category",
    initialState: {
        selectedCategory: initialCategory || typeList[0],
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