import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

import userSlice from "./userSlice";

const TodoStore=configureStore({ 
    reducer:{
        todo:todoSlice,
        user:userSlice
    }
})
export default TodoStore;