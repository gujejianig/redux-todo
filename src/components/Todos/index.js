import React, {useRef, useState} from "react";
import {Button} from "react-bootstrap";
import "./index.css";
import {useDispatch} from "react-redux";
import {removeTodo, editTodo, toggleTodo} from "../../redux/actions/todoitems";

const Todos = ({
	               item
               }) => {
	const dispatch = useDispatch();
	const [editMode, setEditMode] = useState(false);
	const inputRef = useRef(null);


	const onRemove = (id) => {
		dispatch(removeTodo(id));
	};

	const onEdit = (id) => {
		if (inputRef?.current?.value.trim().length > 0) {
			setEditMode(!editMode);
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
					onClick={() => onEdit(item.id)}
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
					onClick={() => onRemove(item.id)}
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
