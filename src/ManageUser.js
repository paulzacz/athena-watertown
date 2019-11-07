// Output a <h1> containing "Add User"
import React, { useState } from "react";

function handleSubmit() {
  return;
}

const ManageUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });
  return (
    <>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" type="text" value={user.name}></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" type="email" value={user.email}></input>
        </div>
        <div>
          <input type="submit" value="Add User" />
        </div>
      </form>
    </>
  );
};

export default ManageUser;
