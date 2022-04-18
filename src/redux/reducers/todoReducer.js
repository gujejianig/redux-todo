import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO, PAGINATED_TODO, PAGINETED_TO_NEXT_PAGE} from "../actions/Actions";


const initialState = {
	todos: [],
	pagination: [],
	activePage: 1,
	todosPerPage: 5
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO :
			return {...state, todos: [...state.todos, {task: action.payload.inputValue, id: Math.random(), done: false}], activePage: action.payload.nextPage}

		case REMOVE_TODO :
			const filteredState = state.todos.filter(item => item.id !== action.payload);
			if ((state.todos.length - 1) % state.todosPerPage === 0 && (state.todos.length - 1) / state.todosPerPage === state.activePage - 1) {
				return {
					...state, todos: filteredState, activePage: state.activePage - 1
				}
			} else {
				return {
					...state, todos: filteredState,
				};
			}

		case EDIT_TODO :
			const changedValue = state.todos.map(item => item.id === action.payload.id ? item.todos = {
				task: action.payload.inputValue, id: Math.random()
			} : item);
			return {
				...state, todos: changedValue
			};

		case TOGGLE_TODO :
			const toggleTodo = state.todos.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo)
			return {
				...state,
				todos: toggleTodo
			}

		case PAGINATED_TODO :

			return {
				...state,
				activePage: action.payload
			}
		case PAGINETED_TO_NEXT_PAGE :
			return {
				...state,
				pagination: [...action.payload],
			}

		default:
			return state
	}
};


export default todoReducer;