import { useReducer } from "react";

type Todo = {
    id: number;
    text: string;
}

type State = {
    todos: Todo[];
}
type ActionType = {
	addTodo: string;
	removeTodo: string;
}

const actionType: ActionType = {
    addTodo: "ADD_TODO",
    removeTodo: "REMOVE_TODO",
}

type Action = 
|{type: string; payload: Todo}
|{type: string; payload: Todo[]}

const initialState: State = {
    todos: [],
};

const objectReducer = (state: State, action: Action) => (
    {
        [actionType.addTodo]: {
            ...state,
            todos: [...state.todos, action.payload] as Todo[]
        },
        [actionType.removeTodo]: {
            ...state,
            todos: action.payload as Todo[]
            
        },
    }
)

const reducer = (state: State, action:Action) => {
    return objectReducer(state, action)[action.type] || state;
}

function useTodoListState() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddTodo = (msg: string) => {
        dispatch(
            {
                type: actionType.addTodo,
                payload: {
                    id: state.todos.length + 1,
                    text: msg,
                }
            }
        );
    }

     const handleRemoveTodo = (id_num: number) => {
        const newTodos: Todo[] = state.todos.filter((item: Todo) => item.id !== id_num);
       
        dispatch(
            {
                type: actionType.removeTodo,
                payload: newTodos,
            }
        );
        
    }
   
    return {
        state,
        handleAddTodo,
        handleRemoveTodo
    }
}

export {useTodoListState}