import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {color:"",background:""}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {value: initialStateValue},
    reducers:{
        changeColor: (state, action) => {
            console.log(action.payload)
            state.value = action.payload;
        },
        resetColor:(state, action) => {
            state.value = initialStateValue;
        }


    }
})

export const { changeColor,resetColor } =  themeSlice.actions;


export default themeSlice.reducer;