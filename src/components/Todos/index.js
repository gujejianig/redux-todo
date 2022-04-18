import React, {useRef, useState} from "react";
import {Button} from "react-bootstrap";
import "./todos.css";
import {useDispatch} from "react-redux";
import {EDIT_TODO, REMOVE_TODO, TOGGLE_TODO} from "../../redux/actions/Actions";

const Todos = ({
	               item
               }) => {
	const dispatch = useDispatch();
	const [editMode, setEditMode] = useState(false);
	const inputRef = useRef(null);


	const onRemove = (id) => {
		dispatch({type: REMOVE_TODO, payload: id});
	};

	const onEdit = (id) => {
		if (inputRef?.current?.value.length > 0) {
			setEditMode(!editMode);
			dispatch({type: EDIT_TODO, payload: {id: id, inputValue: inputRef?.current?.value}});
		}
	};

	const checkboxHandler = (id) => {
		dispatch({type: TOGGLE_TODO, payload: id});
	};

	return (

		<div className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center ">
			{editMode ? (<div >
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
