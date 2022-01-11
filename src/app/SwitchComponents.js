import { createSlice } from "@reduxjs/toolkit";

export const SwitchComponents = createSlice({
  name: "SwitchComponents",
  initialState: { value: "search" },
  reducers:{
      ToSearch(state){
          state.value = 'search'
      },
      ToAdd(state){
          state.value = 'add'
      }
  }
});

export const {ToSearch, ToAdd} = SwitchComponents.actions;
export default SwitchComponents.reducer;
