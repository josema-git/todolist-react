import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <h1 className="text-center">Todos</h1>
      <ListGroup>
        <ListGroup.Item className="p-0">
          <input
            className="container-fluid p-3 border-0"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              console.log(e);
              if (e.key === "Enter") {
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="What do you need to do"
          />
        </ListGroup.Item>
        {todos.map((item, index) => (
          <ListGroup.Item className="p-3 d-flex justify-content-between">
            <p className="m-0 d-flex align-items-center">{item}</p>
            <button
              type="button"
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index !== currentIndex)
                )
              }
              class="btn btn-light"
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <p>{todos.length} items left</p>
    </div>
  );
};

export default Home;
