import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state,action) => {
            state.counter += action.payload;
        },
        decrement: (state,action) =>{ 
            if (state.counter > 0){
            state.counter -= action.payload;
            }
        },
    },
})

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;