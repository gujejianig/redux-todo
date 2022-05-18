import {Button} from "react-bootstrap";
import React, {useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TODO, addTask, FETCH_DATA} from "../../redux/actions/todoitems";
import {nextPagerSelector} from "../../redux/selectors/selectors";
// import {Todo} from "../../utils/requests";
import {addTodo} from "../../utils/requests";
import {request} from "../../utils/fetchApi";
import axios from "axios";

const SearchForm = () => {
	const nextPage = useSelector(nextPagerSelector);
	const [inputValue, setInputValue] = useState("");
	const dispatch = useDispatch();

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			submitHandler();
		}
	};

	const submitHandler = () => {
		if (inputValue.trim().length === 0) {
			alert("input have no value");
		} else {
			axios.post(`http://localhost:4000/api/todos/add`, {task: inputValue})
				.then(res => {
					console.log('data added succesfully')
					// dispatch(addTask(inputValue, nextPage, res.data.todos._id))
					console.log('addTaskFil:', res.data.todos)
					dispatch({type: ADD_TODO, payload: res.data.todos})
				}).catch(err => {
				console.log('error', err);
			});
			setInputValue('');
		}
	};

	return (<div className="d-flex w-100 justify-content-sm-center mt-3">
		<input
			onKeyUp={handleKeyDown}
			value={inputValue}
			className="SearchInput"
			onChange={(e) => setInputValue(e.target.value)}
		/>
		<Button size="sm" onClick={submitHandler} variant="primary">
			Add
		</Button>
	</div>);
};

export default SearchForm;



