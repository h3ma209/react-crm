import { configureStore } from "@reduxjs/toolkit";
import userData from "./userData";
import SwitchComponents from "./SwitchComponents";

export default configureStore({
    reducer:{
        userData: userData,
        SwitchComponents:SwitchComponents
    }
})