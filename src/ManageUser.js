import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { addUser, editUser } from "./api/userApi";
import { Redirect, useRouteMatch } from "react-router-dom";
import Input from "./Input";

const ManageUser = ({ users, setUsers }) => {
  const match = useRouteMatch(); // info about hte matching URL
  const userId = parseInt(match.params.userId, 10);
  const [user, setUser] = useState({ name: "", email: "" });
  const [userIndex, setUserIndex] = useState(users.length);
  useEffect(() => {
    let _userIndex = users.length;
    if (userId) {
      _userIndex = users.findIndex(u => u.id === userId);
      if (_userIndex >= 0) {
        setUser(users[_userIndex]);
      } else {
        _userIndex = users.length;
      }
    }
    setUserIndex(_userIndex);
  }, [users, userId]);

  const [saveCompleted, setSaveCompleted] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault(); // Stop browser from posting back
    const savedUser = await (userIndex < users.length
      ? editUser(user)
      : addUser(user));
    const newUsers = [
      ...users.slice(0, userIndex),
      savedUser,
      ...users.slice(userIndex + 1, users.size)
    ];
    setUsers(newUsers);
    setSaveCompleted(true);
  }

  function handleUserChange(event) {
    const newUser = { ...user, [event.target.id]: event.target.value };
    // Use computed property syntax to reference a property using a variable.
    setUser(newUser);
  }

  const buttonText = (userIndex < users.length ? "Edit" : "Add") + " User";

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
