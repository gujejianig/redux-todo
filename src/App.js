import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/Pagination/index";
import AddTask from "./components/addTask/index";
import Todos from "./components/Todos/index";
import {useSelector} from "react-redux";

const App = () => {

	const  list  = useSelector((state) => state)
	let end = list.activePage * list.todosPerPage;
	let start = end - list.todosPerPage;

	return (<>
		<div className="Container">
			<AddTask/>
				{list.todos.slice(start, end)?.map((item) => {
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
