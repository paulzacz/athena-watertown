import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { addUser, editUser } from "./api/userApi";
import { Redirect, useRouteMatch } from "react-router-dom";
import Input from "./Input";

const ManageUser = ({ users, setUsers }) => {
  const match = useRouteMatch(); // info about the matching URL
  const userId = parseInt(match.params.userId, 10);
  const [user, setUser] = useState({ name: "", email: "" });
  useEffect(() => {
    if (userId) {
      const userIndex = users.findIndex(u => u.id === userId);
      if (userIndex >= 0) {
        setUser(users[userIndex]);
      }
    }
  }, [users, userId]);

  const [saveCompleted, setSaveCompleted] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault(); // Stop browser from posting back
    const savedUser = await (!!user.id ? editUser(user) : addUser(user));
    const newUsers = users.map(u => (u.id === savedUser.id ? savedUser : u));
    setUsers(newUsers);
    setSaveCompleted(true);
  }

  function handleUserChange(event) {
    const newUser = { ...user, [event.target.id]: event.target.value };
    // Use computed property syntax to reference a property using a variable.
    setUser(newUser);
  }

  const buttonText = (!!user.id ? "Edit" : "Add") + " User";

  return (
    <>
      {saveCompleted && <Redirect to="/users" />}
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          onChange={handleUserChange}
          value={user.name}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          onChange={handleUserChange}
          value={user.email}
        />
        <input type="submit" value={buttonText} />
      </form>
    </>
  );
};

ManageUser.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func
};

export default ManageUser;
