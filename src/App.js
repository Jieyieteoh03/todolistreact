import "./index.css";
import { useState } from "react";

// const todos = [
//   {
//     id: 1,
//     text: "Task 1",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Task 2",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "Task 3",
//     isCompleted: false,
//   },
// ];

export default function App() {
  const [input, setInput] = useState("");
  const [nameList, setNameList] = useState([]);
  console.log(nameList);
  // const addName = () => {
  //   setNameList([...nameList, input]);
  //   setInput("");
  // };

  const deleteButton = (id) => {
    const newNameList = nameList.filter((nameList) => nameList.id !== id);
    setNameList(newNameList);
  };

  // const checkTask = (id) => {
  //   const newNameList = nameList.map((nameList) => {
  //     if (nameList.id === id) {
  //       const newTask = { ...nameList };
  //       newTask.name = "abc";
  //       return newTask;
  //     } else {
  //       return nameList;
  //     }
  //   });
  // };

  return (
    <div className="card rounded shadow-sm">
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <ul className="list-group">
          {nameList.map((List) => {
            const { id, text, isCompleted } = List;
            return (
              <li
                key={id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <button
                    onClick={() => {
                      const newCheckList = nameList.map((check) => {
                        if (check.id === List.id) {
                          const newCheck = { ...check };
                          if (check.isCompleted === true) {
                            newCheck.isCompleted = false;
                          } else if (check.isCompleted === false) {
                            newCheck.isCompleted = true;
                          }
                          return newCheck;
                        } else {
                          return check;
                        }
                      });
                      setNameList(newCheckList);
                    }}
                    className={`btn btn-sm ${
                      isCompleted ? "btn-success" : "btn-light"
                    }`}
                  >
                    <i
                      className={`bi ${
                        isCompleted ? "bi-check-square" : "bi-square"
                      }`}
                    ></i>
                  </button>
                  {isCompleted ? (
                    <span className="ms-2 text-decoration-line-through">
                      {text}
                    </span>
                  ) : (
                    <span className="ms-2">{text}</span>
                  )}
                </div>
                <div>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      deleteButton(id);
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-4">
          <form
            className="d-flex justify-content-between align-items-center"
            onSubmit={(event) => {
              event.preventDefault(); //cancel default behaviour
              const newNameList = [...nameList]; //clone list
              newNameList.push({
                //add new item
                id: Math.random(),
                text: input,
                isCompleted: false,
              });
              setNameList(newNameList);
              setInput("");
              // can put here as well
            }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Add new item..."
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
            <button className="btn btn-primary btn-sm rounded ms-2">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
