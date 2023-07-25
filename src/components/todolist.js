import { AddTodoForm } from "./addtodoform";
import { TodoItem } from "./todoitem";

export const TodoList = (props) => {
  return (
    <div className="card rounded shadow-sm m-5">
      <div className="card-body">
        <h3 className="card-title mb-3">{props.title}</h3>
        <ul className="list-group">
            {props.todos.map((todos) => {
                return(
                <TodoItem key={todos.id} todos={todos}/>
                )
            })}
        </ul>
        <AddTodoForm />
      </div>
    </div>
  );
};
