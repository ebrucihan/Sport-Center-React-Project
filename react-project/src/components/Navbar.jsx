import React, { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");

      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <nav className="navbar-container">
        {/* Logo container with an image */}
        <div className="logo">
          <img src="img/logo.png" alt="band" />
        </div>
        {/* Checkbox for responsive hamburger menu functionality */}
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        {/* Label for hamburger icon */}
        <label htmlFor="menu-btn" className="menu-icon">
          <i className="fa-solid fa-bars menu-hmbgr" />
        </label>
        {/* Navigation bar with links to different sections of the page */}
        <div className="bar">
          <a href="#home">Home</a>
          <a href="#classes">Classes</a>
          <a href="#trainer">Trainer</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          {/* Join Us button wrapped in a link */}
          <button>
            <a href="#joinus">
              <p>JOIN US</p>
            </a>
          </button>
        </div>
      </nav>
      {/* Navbar end */}
    </header>
  );
}
