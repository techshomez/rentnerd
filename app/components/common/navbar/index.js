"use client";
import { useState } from "react";
import Link from "next/link";
import "./navbar.css";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
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

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
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
          <div className="m__icon">
            <i onClick={() => setOpenMenu(!openMenu)}>
              {openMenu ? <FiX /> : <FiMenu />}
            </i>
          </div>
        </nav>
        {openMenu && (
          <div className="mobile__menu">
            <div className="menu__item">
              <Link href="">Home</Link>
              <Link href="">Contact Us</Link>
              <Link href="">Location</Link>
              <Link href="">About Us</Link>
            </div>
            <button>Try now</button>
          </div>
        )}
        <Banner />
      </div>
    </>
  );
};

export default Navbar;
