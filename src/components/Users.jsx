import React, { useEffect, useState } from 'react';

import Albums from './Albums';
import Todos from './Todos';

const Users = () => {
  const [userList, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUser(users));
  }, []);
  const [showUser, setShowUser] = useState(true);
  const [showTodo, setShowTodo] = useState(false);
  const [showUserId, setUserId] = useState(null);
  return (
    <div>
      {showUser ? (
        <div className="userBox">
          {userList.map(user => (
            <ul key={user.id} className="userStyle">
              <li>ID: {user.id}</li>
              <li>Name: {user.name}</li>
              <li>Username: {user.username}</li>
              <li>Email: {user.email}</li>
              <li>Phone: {user.phone}</li>
              <li>Website: {user.website}</li>
              <button
                className="buttonStyle"
                onClick={() => {
                  setShowUser(false);
                  setShowTodo(true);
                  setUserId(user.id);
                }}
              >
                Todos
              </button>
              <button
                className="buttonStyle ml-2"
                onClick={() => {
                  setShowUser(false);
                  setUserId(user.id);
                }}
              >
                Albums
              </button>
            </ul>
          ))}
        </div>
      ) : showTodo ? (
        <Todos userId={showUserId} />
      ) : (
        <Albums userId={showUserId} />
      )}
    </div>
  );
};

export default Users;
