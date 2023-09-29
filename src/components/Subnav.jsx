import React from "react";
import { NavLink } from "react-router-dom";

const Subnav = () => {
  return (
    <>
      <nav className="subNav mb-4">
        <ul>
          <li>
            <NavLink to="/" className="roBtn">
              Collection Pages
            </NavLink>
          </li>
          <li>
            <NavLink to="/Productpage" className="roBtn">
              Product Pages
            </NavLink>
          </li>
          <li>
            <NavLink to="/Otherpage" className="roBtn">
              Other Pages
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Subnav;
