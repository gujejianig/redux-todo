import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/Pagination/index";
import AddTask from "./components/AddTask/index";
import Todos from "./components/Todos/index";
import {useSelector} from "react-redux";
import {slicerSelector} from "./redux/selectors/selectors";

const App = () => {
	const slicedTodo = useSelector(slicerSelector);

	return (<>
		<div className="Container">
			<AddTask/>
			{slicedTodo?.map((item) => {
				return (<Todos
					key={item.id}
					item={item}
				/>);
			})}
			<Pagination
			/>
		</div>
	</>);
};
export default App;



//
// export const todos = createSelector(selectTodos, ({todos, pagination, activePage, todosPerPage}) => {
// 	let end = activePage * todosPerPage;
// 	let start = end - todosPerPage;
// 	const  todosMapped =  todos.slice(start, end);
//
// 	return {todosMapped}
// })