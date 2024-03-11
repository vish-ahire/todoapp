import { createSlice } from "@reduxjs/toolkit";

const todoSlice= createSlice({
    name: "todo",
    initialState:{
        todos:[
            {id:"1",title:"Buy groceries",desc:"Rice, Oil, Suger",completed:false},
            {id:"2",title:" groceries",desc:"Suger",completed:true},
        ],
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        updateStatus:(state, action)=> {
            const index = state.todos.findIndex((item) => item.id === action.payload);
            if (index !== -1) state.todos[index].completed=!state.todos[index].completed;
        }
    }
})
       
export const{addTodo,updateStatus} = todoSlice.actions
export default todoSlice.reducer