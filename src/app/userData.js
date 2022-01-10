import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "userData",
  initialState: {
    value: [
      // {
      //   id: "6",
      //   type: "customer",
      //   name: "hema",
      //   date: "2020-1-23",
      // },
    ],
  },
  reducers: {
    Add: (state, action) => {
      state.value.push(action.payload);
    },
    Delete(state, action) {
      state.value.splice(action.payload, 1);
    },
    SetDT(state, action){
      state.value = action.payload;
      // console.log(action.payload)
    }
  },
});

export const { Add, Delete, SetDT } = userData.actions;

export default userData.reducer;
