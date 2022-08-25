import React,{ useState, useReducer } from "react";

const UseReducerComponent = () => {
const [count,setCount]=useState(0)
const initialTodos = [{ id: 1, title: "Todo 1", complete: false }, { id: 2, title: "Todo 2", complete: false }];

// state logic
const reducer = (state, action) => {
    console.log(action,'action')
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};
const [todos, dispatch] = useReducer(reducer, initialTodos);
const handleComplete = (todo) => { console.log(todo); dispatch({ type: "COMPLETE", id: todo.id }) };

return (
    <>
        Use Reducer
            {/* Use Reducer */}
            <h5>Use Reducer</h5>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title} - {todo.complete ? 'True' :'False'}
                    </label>
                </div>
            ))}
    </>
) 
}

export default UseReducerComponent;
