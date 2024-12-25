import { useReducer } from "react";
//Tipado para la lógica
type Todo = {id: string; text: string;}
type State = {todos: Todo[]}
type ActionType = {addTodo: string; removeTodo: string;}
type Payload = | Todo | Todo[];
type Action = {type: string; payload: Payload}

//ActionType ayudará a que no hayan cambios en el nombre de las acciones y a evitar errores de escritura.
const actionType: ActionType = {
    addTodo: "ADD_TODO",
    removeTodo: "REMOVE_TODO",
}
const initialState: State = {
    todos: [],
};

//Objeto reductor, cumple la función de devolver un objeto que contiene diferentes presentaciones del estado según las acciones que se ejecuten en el reducer.
const objectReducer = (state: State, payload: Payload) => (
    {
        [actionType.addTodo]: {
            ...state,
            todos: [...state.todos, payload] as Todo[]
        },
        [actionType.removeTodo]: {
            ...state,
            todos: payload as Todo[]
            
        },
    }
)
//Reducer, función que retorna el nuevo estado en base a las acciones
const reducer = (state: State, action:Action) => {
    return objectReducer(state, action.payload)[action.type] || state;
}
//Hook para entragar el estado y las funciones manejadoras del estado al componente deseado
function useTodoListState() {
    const [state, dispatch] = useReducer(reducer, initialState);
    //Función que agrega los todos nuevos
    const handleAddTodo = (msg: string) => {
        dispatch(
            {
                type: actionType.addTodo,
                payload: {
                    id: Date.now().toString(16),
                    text: msg,
                }
            }
        );
    }
    //Función que remueve los todos
    const handleRemoveTodo = (id_num: string): void => {
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