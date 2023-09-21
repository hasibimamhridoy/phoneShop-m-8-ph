import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex justify-between shadow-md py-5 px-20">
        <h1 className="text-xl">Phone Shop</h1>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              Favorites
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>

          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
