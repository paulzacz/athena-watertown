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
      <ul>
        {users.map(user => (
          <li>
            {/* Delay execution via arrow func */}
            <button onClick={event => handleDelete(user.id)}>Delete</button>
            {user.name}
          </li>
        ))}
      </ul>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text"></input>
      <p>My app.</p>
    </>
  );
}

export default App;
