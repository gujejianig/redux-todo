import {Button} from "react-bootstrap";
import React, {useState} from "react";
import "./searchForm.css"
import {useDispatch, useSelector} from "react-redux";
import {ADD_TODO} from "../../redux/actions/Actions";

const SearchForm = () => {
    const [inputValue, setInputValue] = useState("");
    const list = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            // submitHandler(event);
            submitHandler()
        }
    };

    const submitHandler = () => {
        if (inputValue.trim().length === 0) {
            alert("input have no value");
        } else {
            let nextPage = Math.ceil((list.todos?.length + 1) / list?.todosPerPage )
            dispatch({type: ADD_TODO, payload: {inputValue: inputValue, nextPage: nextPage}})
            setInputValue('')
        }
    }

    return (
        <div className="d-flex w-100 justify-content-sm-center mt-3">
            <input
                onKeyUp={handleKeyDown}
                value={inputValue}
                className='SearchInput'
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button size="sm" onClick={submitHandler} variant="primary">
                Add
            </Button>
        </div>
    );
};

export default SearchForm;


