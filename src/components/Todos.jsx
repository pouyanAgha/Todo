import React, { useEffect, useState } from 'react';

import Users from './Users';

const Todos = props => {
  const [TodoList, setTodo] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(Todo => setTodo(Todo));
  }, []);
  const [backUser, setBackUser] = useState(true);
  return (
    <div>
      {backUser ? (
        <div>
          <div className="userBox">
            {TodoList.map(
              todo =>
                todo.userId === props.userId && (
                  <ul key={todo.userId} className="userStyle">
                    <li>USER ID: {todo.userId}</li>
                    <li>ID: {todo.id}</li>
                    <li>TITLE: {todo.title}</li>
                    <li>COMPLETED: {todo.completed ? 'true' : 'false'}</li>
                  </ul>
                ),
            )}
          </div>
          <button className="buttonStyle m-2" onClick={() => setBackUser(false)}>
            back
          </button>
        </div>
      ) : (
        <Users />
      )}
    </div>
  );
};

export default Todos;
