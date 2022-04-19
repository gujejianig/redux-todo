import {createSelector} from "reselect";

const selectTodos = state => state

export const todosSelector = createSelector(selectTodos, ({todos, pagination, activePage, todosPerPage}) => {
	let end = activePage * todosPerPage;
	let start = end - todosPerPage;
	return {todos, pagination, activePage, todosPerPage, start, end}
})
