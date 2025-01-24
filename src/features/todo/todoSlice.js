import { createSlice , nanoid, ReducerType} from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello World"}]
}
// slice is a bigger form of Reducer
// reducer is a function
export const todoSlice = createSlice({
    name:'todo', // reflect in the redux dev extension
    initialState,
    reducers:{
        // state has curretn state and action is the input
        addToDo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeToDo:(state, action)=>{

            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload
            )
            
        },
        updateToDo:(state,action)=>{
            state.todos = state.todos.map((todo)=>
                //rtk supports immutable updates if i do todo.text = action.payload thingy then it mutates the state, so we would have to create a new object by using the spread operator
                (todo.id===action.payload.id)?{
                    ...todo,text: action.payload.text
                }:todo
            )
        }
    }
})

// extracts and exports the action creators (addToDo, removeToDo, updateToDo) so that they can be used inside React components.
export const {addToDo,removeToDo,updateToDo} = todoSlice.actions

//  exports the reducer function so that it can be added to the Redux store.
export default todoSlice.reducer