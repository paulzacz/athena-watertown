import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Cory", email: "c@h.com" },
    { id: 2, name: "Megan", email: "m@c.com" },
    { id: 3, name: "Tami", email: "t@tonga.com" }
  ]);
  const h1Style = {
    color: "red",
    marginBottom: 20
  };

  function handleDelete(id) {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <>
      <h1 className="header" style={h1Style}>
        App
      </h1>
      <ul>
        {users.map(user => (
          <li>
            {/* Delay execution via arrow func */}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
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
