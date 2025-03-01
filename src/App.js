import React, { useState, useEffect } from "react";
import Users from "./Users";
import Home from "./Home";
import ManageUser from "./ManageUser";
import Nav from "./Nav";
import { Route } from "react-router-dom";
import { deleteUser, getUsers } from "./api/userApi";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect runs by default after every render.
  useEffect(() => {
    // Using _users to avoid naming confusion with users above
    getUsers().then(_users => setUsers(_users));
  }, []);

  function handleDelete(id) {
    deleteUser(id).then(() => {
      // Remove deleted element from users array
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers); // update state, so React knows to re-render
    });
  }

  return (
    <>
      <Nav />
      {/* When the URL is at root, load the users component. */}
      <Route path="/" component={Home} exact />
      <Route
        path="/users"
        render={() => <Users users={users} deleteUser={handleDelete} />}
      />
      <Route
        path="/user/:userId?"
        render={() => <ManageUser users={users} setUsers={setUsers} />}
      />
    </>
  );
}

export default App;
