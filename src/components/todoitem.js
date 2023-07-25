export const TodoItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <span className="ms-2">
          {props.todos.isCompleted ? (
           <button className="btn btn-sm btn-success me-2">
                <i className="bi bi-check-square"></i>
            </button>
          ) : (
            <button className="btn btn-sm btn-light me-2">
                <i className="bi bi-square"></i>
            </button>
          )}
        </span>
          {props.todos.isCompleted ? (
           <span class="ms-2 text-decoration-line-through">{props.todos.text}</span>
          ) : (
            <span class="ms-2 ">{props.todos.text}</span>
          )}

      </div>
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
};
