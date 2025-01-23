import { createSlice , nanoid, ReducerType} from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello World"}]
}
// slice is a bigger form of Reducer
// reducer is a function
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addToDo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeToDo:()=>{
            
        }
    }
})