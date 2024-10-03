import { createSlice } from "@reduxjs/toolkit";

 const countSlice = createSlice({
    name: "counter",
    initialState: {
        value: 2
    },
    reducers : {
        addCount: (state) => {
            state.value += 1
        }
    }
})

export const { addCount } = countSlice.actions;
export default countSlice.reducer;