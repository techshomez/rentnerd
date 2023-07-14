"use client";
import { useState } from "react";
import Link from "next/link";
import "./navbar.css";
import { FiHome } from "react-icons/fi";
import Banner from "../../home/banner";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);

  function setSticky() {
    if (window.scrollY >= 50) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  window.addEventListener("scroll", setSticky);

  return (
    <div className="header">
      <nav className={fixed ? "navbar nav_sticky" : "navbar"}>
        <div className="left">
          <Link href="/" className="logo">
            <i>
              <FiHome />
            </i>
            <h2>RentNerd</h2>
          </Link>
        </div>
        <div className={fixed ? "middle nav_sticky" : "middle"}>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/support">Support</Link>
          <Link href="/location">Location</Link>
          <Link href="/about">About Us</Link>
        </div>
        <div className="right">
          <Link href="/try-now">Try now</Link>
        </div>
      </nav>
      <Banner />
    </div>
  );
};

export default Navbar;
