import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Todos = () => {
  const param = useParams();
  const [TodoList, setTodo] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${param.id}`)
      .then(response => response.json())
      .then(Todo => setTodo(Todo));
  }, [param.id]);
  return (
    <div>
      {TodoList.map(todo => (
        <ul key={todo.userId} className="userStyle">
          <li>USER ID: {todo.userId}</li>
          <li>ID: {todo.id}</li>
          <li>TITLE: {todo.title}</li>
          <li>COMPLETED: {todo.completed ? 'true' : 'false'}</li>
        </ul>
      ))}
      <Link to="/" className="buttonStyle m-2">
        back
      </Link>
    </div>
  );
};

export default Todos;
