import { Button } from "react-bootstrap";
import {useSelector} from "react-redux";
import {PAGINATED_TODO, PAGINETED_TO_NEXT_PAGE} from "../../redux/actions/Actions";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
const Pagination = () => {
  const  list  = useSelector((state) => state)
  const dispatch = useDispatch()
  let paginationButtons = [];

  for (let i = 1; i <= Math.ceil(list.todos.length / list.todosPerPage); i++) {
    paginationButtons.push(i);
  }

useEffect(() => {
  dispatch({type: PAGINETED_TO_NEXT_PAGE, payload: paginationButtons})
},[list.todos])

const onPaginate = (index) => {
  list.activePage = index
  dispatch({type: PAGINATED_TODO, payload: index})
}

  return (
    <div className="d-flex">
      {list.pagination?.map((btn, index) => {
        return (
          <div key={index}>
            <Button
              onClick={() => onPaginate(index + 1)}
              size="sm"
              className={list.activePage === btn ? "active" : ""}
              variant="outline-dark"
            >
              {btn}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
