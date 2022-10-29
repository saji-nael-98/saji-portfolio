import React, { createRef, useState } from "react";
import ScrollSpy from "react-scrollspy-navigation/dist/ScrollSpy";
import NavLink from "../NavLink";
import "./Navbar.css";
function Navbar() {
  const [isActive, setActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      setActive(false);
    } else setActive(true);
  });
  return (
    <nav className={`navbar ${isActive ? "navbar--active" : null}`}>
      <div className="navbar__brand">
        <h1>start bootstrap</h1>
      </div>
      <div className="navbar__links">
      
      </div>
    </nav>
  );
}

export default Navbar;
