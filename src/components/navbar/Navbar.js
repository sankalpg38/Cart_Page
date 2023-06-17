/** @format */

import "./Navbar.css";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {HiShoppingCart} from "react-icons/hi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart"><HiShoppingCart size={22} /> </NavLink>
    </div>
  );
};

export default Navbar;
