import React from "react";
import Users from "./Users";
import Home from "./Home";
import ManageUser from "./ManageUser";
import { Route } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/users" component={Users} exact />
      <Route path="/user" component={ManageUser} />
    </>
  );
}

export default App;
