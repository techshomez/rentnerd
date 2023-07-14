"use client";
import Link from "next/link";
import "./navbar.css";
import { FiHome } from "react-icons/fi";
import Banner from "../../home/banner";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="left">
          <Link href="/" className="logo">
            <i>
              <FiHome />
            </i>
            <h2>RentNerd</h2>
          </Link>
        </div>
        <div className="middle">
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
