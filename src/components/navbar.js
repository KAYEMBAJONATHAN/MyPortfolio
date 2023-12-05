import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css';
import { IoIosReorder } from "react-icons/io";

const Navbar = () => {
 const [expandnav, setExpandNav] = useState(false); 
 const location = useLocation();

 useEffect(() => {
   setExpandNav(false);
 }, [location])

  return (
    <div className="navbar" id={expandnav ? "open" : "close"}>
      <div className="navToggle">
        <button
        onClick={() => {
           setExpandNav((prev) => !prev)   
        }}
        >
          <IoIosReorder />
          </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
