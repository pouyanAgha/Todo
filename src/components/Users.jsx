import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [userList, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUser(users));
  }, []);

  return (
    <div>
      <div className="userBox">
        {userList.map(user => (
          <ul key={user.id} className="userStyle">
            <li>ID: {user.id}</li>
            <li>Name: {user.name}</li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>Website: {user.website}</li>
            <Link to={`/Todos/${user.id}`} className="buttonStyle">
              Todos
            </Link>
            <Link to={`/Albums/${user.id}`} className="buttonStyle">
              Albums
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Users;
