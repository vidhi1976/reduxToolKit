import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToDo, updateToDo } from "../features/todo/todoSlice";

const ToDo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // State to track which todo is being edited and its new text
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");
  

  return (
    <>
      <div className="mt-12">ToDos</div>
      <ul className="list-none m-12">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between
      items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* If the todo is being edited, show input field */}
            {editId === todo.id ? (
              
              <input
                type="text"
                placeholder="edited todo"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="text-black px-2 py-1 bg-white"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div>
              {/* Edit Button */}
              {editId === todo.id ? (
                <button
                  onClick={() => {
                    dispatch(updateToDo({ id: todo.id, text: newText }));
                    setEditId(null); // Reset edit state
                    setNewText(""); // Clear input
                  }}
                  className="text-white bg-green-500 border-0 
                      py-1 px-4 focus:outline-none 
                      hover:bg-green-600 rounded text-md ml-10"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setNewText(todo.text); // Pre-fill with existing text
                  }}
                  className="text-white bg-yellow-500 border-0 
                      py-1 px-4 focus:outline-none 
                      hover:bg-yellow-600 rounded text-md ml-10"
                >
                  Edit
                </button>
              )}

              {/* Delete Button */}
              <button
                onClick={() => dispatch(removeToDo(todo.id))}
                className="text-white bg-red-500 border-0 
                      py-1 px-4 focus:outline-none 
                      hover:bg-red-600 rounded text-md ml-10"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
