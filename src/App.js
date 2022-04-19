import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/Pagination/index";
import AddTask from "./components/addTask/index";
import Todos from "./components/Todos/index";
import {useSelector} from "react-redux";
import {todosSelector} from "./redux/selectors/selectors";

const App = () => {
	const {todos, activePage, todosPerPage} = useSelector(todosSelector);
	let end = activePage * todosPerPage;
	let start = end - todosPerPage;

	return (<>
		<div className="Container">
			<AddTask/>
			{todos.slice(start, end)?.map((item) => {
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
