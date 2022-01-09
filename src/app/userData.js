import { createSlice } from '@reduxjs/toolkit'

export const userData = createSlice({
    name: "tableData",
    initialState:{
        value:[]
    },
    reducers:{
        Add: (state,action) => {
            state.value.push(action.payload)
        },
        Delete(state,action){
            state.value.splice(action.payload,1)
        }
    }
})

export const {Add, Delete} = userData.actions;

export default userData