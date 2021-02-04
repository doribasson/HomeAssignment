import React from "react";
import "./topbar.css";
import { Link, NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="header">
      <h2 className="logo">
        <Link className="link" to="/">
          Codicate
        </Link>
      </h2>
      <input type="checkbox" id="chk" />
      <label htmlFor="chk" className="show-menu-btn">
        <i className="fas fa-bars" />
      </label>

      <ul className="menu">
        <NavLink
          exact
          to="/"
          activeStyle={{
            // fontWeight: "bold",
            color: "red"
          }}
        >
          home
        </NavLink>

        <NavLink
          to="/favorite"
          activeStyle={{
            color: "red"
          }}
        >
          favorite
        </NavLink>

        <label htmlFor="chk" className="hide-menu-btn">
          <i className="fas fa-times" />
        </label>
      </ul>
    </div>
  );
};

export default Topbar;
