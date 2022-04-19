import {Button} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {todosSelector} from "../../redux/selectors/selectors";
import {paginatedTodo, showNextPage} from "../../redux/actions/todoitems";
const Pagination = () => {
	const {todos, todosPerPage, activePage, pagination} = useSelector(todosSelector);

	const dispatch = useDispatch();
	let paginationButtons = [];

	for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
		paginationButtons.push(i);
	}

	useEffect(() => {
		dispatch(showNextPage(paginationButtons));
	}, [todos]);

	const onPaginate = (index) => {
		dispatch(paginatedTodo(index));
	};

	return (<div className="d-flex">
			{pagination?.map((btn, index) => {
				return (<div key={index}>
						<Button
							onClick={() => onPaginate(index + 1)}
							size="sm"
							className={activePage === btn ? "active" : ""}
							variant="outline-dark"
						>
							{btn}
						</Button>
					</div>);
			})}
		</div>);
};

export default Pagination;
