import React, { useState } from "react";
import { addUser } from "./api/userApi";

const ManageUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  function handleSubmit() {
    addUser(user);
  }

  function handleChange(event) {
    // Use computed propery syntax to reference a property using a variable
    setUser({ ...user, [event.target.id]: event.target.value });
  }

  return (
    <>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            type="text"
            value={user.name}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          ></input>
        </div>

        <input type="submit" value="Add User" />
      </form>
    </>
  );
};

export default ManageUser;
