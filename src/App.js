import React, { useEffect, useState } from "react";

import { deleteUser, getUsers } from "./api/userApi";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(dbUsers => setUsers(dbUsers));
  }, []);

  const h1Style = {
    color: "red",
    marginBottom: 20
  };

  function handleDelete(id) {
    deleteUser(id).then(() => {
      // Remove deleted element from users array
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers); // update state, so React knows to re-render
    });
  }

  return (
    <>
      <h1 className="header" style={h1Style}>
        Users
      </h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        {users.map(user => (
          <tr>
            <td>
              <button onClick={event => handleDelete(user.id)}>Delete</button>
            </td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text"></input>
      <p>My app.</p>
    </>
  );
}

export default App;
