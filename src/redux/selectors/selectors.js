import {createSelector} from "reselect";

const selectTodos = state => state

export const todosSelector = createSelector(selectTodos, ({todos, pagination, activePage, todosPerPage}) => {
	return {todos, pagination, activePage, todosPerPage}
})
