import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#614476"
};

function Nav() {
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="/users" activeStyle={activeStyle}>
        Users
      </NavLink>
    </nav>
  );
}

export default Nav;
