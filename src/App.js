import "./index.css";
import { TodoList } from "./components/todolist";

const todos = [
  {
    id: 1,
    text: "Task 1",
    isCompleted: true
  },
  {
    id: 2,
    text: "Task 2",
    isCompleted: false
  },
  {
    id: 3,
    text: "Task 3",
    isCompleted: false
  }
];

export default function App() {
  return (
   <div>
    <TodoList title="To Do List" todos={todos}/>
    
   </div>
  );
}

