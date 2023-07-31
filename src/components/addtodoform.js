
export const AddTodoForm = (props) => {
  const [input, setInput] = useState([]);
  const [name, setName] = useState("");

  const addName = () => {
    setName([...name, input])
    setInput("");
  };

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
      <div className="mt-4">
      <form className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Add new item..."
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button className="btn btn-primary btn-sm rounded ms-2" onClick={addName}>Add</button>
      </form>
    </div>
    </div>
    
  );
};
