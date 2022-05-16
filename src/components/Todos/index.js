import React, {useRef, useState} from "react";
import {Button} from "react-bootstrap";
import "./index.css";
import {useDispatch} from "react-redux";
import {removeTodo, editTodo, toggleTodo, REMOVE_TODO} from "../../redux/actions/todoitems";
import {request} from "../../utils/fetchApi";
import axios from "axios";
const Todos = ({
	               item
               }) => {
	const dispatch = useDispatch();
	const [editMode, setEditMode] = useState(false);
	const inputRef = useRef(null);


	const onRemove =  (id) => {
		console.log('item', item)
		console.log('id', item._id)
		dispatch(removeTodo(id));
		axios.delete(`http://localhost:4000/api/todos/:${item._id}`)
			.then(res => {
				// dispatch({type: FETCH_DATA, payload: res.data});
				console.log('deleted successfully');
				// dispatch({type: REMOVE_TODO, payload: })
			}).catch(err => {
			console.log('error', err);
		});
	};

	const onEdit = (id) => {
		if (inputRef?.current?.value.trim().length > 0) {
			setEditMode(!editMode);

			axios.patch(`http://localhost:4000/api/todos/:${id}`, {task: inputRef?.current?.value})
				.then(res => {
					// dispatch({type: FETCH_DATA, payload: res.data});
					console.log('edited successfully');
				}).catch(err => {
				console.log('error', err);
			});
			dispatch(editTodo(id, inputRef?.current?.value));

		}
	};

	const checkboxHandler = (id) => {
		dispatch(toggleTodo(id));
	};

	return (

		<div className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center ">
			{editMode ? (<div>
				<input
					ref={inputRef}
					defaultValue={item.task}
				/>
				<Button
					onClick={() => setEditMode(false)}
					className="m-lg-2"
					size="sm"
					variant="danger"
				>
					cancel
				</Button>
				<Button
					onClick={() => onEdit(item._id)}
					className=""
					size="sm"
					variant="info"
				>
					save
				</Button>
			</div>) : (<div className="w-100">
          <span className={`todoTag ${item.done ? "splitText" : ""}`}>
            {item.task}
          </span>
				<input onChange={() => checkboxHandler(item.id)} type="checkbox"/>
				<Button
					onClick={() => onRemove(item._id)}
					className="m-lg-2"
					size="sm"
					variant="danger"
				>
					remove
				</Button>
				<Button
					onClick={() => setEditMode(true)}
					className=""
					size="sm"
					variant="info"
				>
					edit
				</Button>
			</div>)}
		</div>);
};

export default Todos;
