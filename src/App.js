import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/Pagination/index";
import AddTask from "./components/AddTask/index";
import Todos from "./components/Todos/index";
import {useSelector} from "react-redux";
import {todosSelector} from "./redux/selectors/selectors";

const App = () => {
	const {todos, start, end} = useSelector(todosSelector);

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
