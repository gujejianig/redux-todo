import axios from "axios";


export const request = (urlType, inputValue) => {
	axios.post(`http://localhost:4000/api/todos/${urlType}`, {task: inputValue})
		.then(res => {
			// dispatch({type: FETCH_DATA, payload: res.data});
			console.log('requested successfully');
		}).catch(err => {
		console.log('error', err);
	});
};