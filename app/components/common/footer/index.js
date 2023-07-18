"use client";
import Link from "next/link";
import "./footer.css";
import {
  FiFacebook,
  FiHome,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { BsFillEnvelopeAtFill, BsPhone } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__item space">
          <div className="footer__logo">
            <i>
              <FiHome />
            </i>
            <h3>RentNerd</h3>
          </div>
          <div className="footer__list">
            <p>
              With their long working hours, cultural obsession with work, and
              high-stakes schooling system.
            </p>
            <div className="footer__social">
              <i>
                <FiFacebook />
              </i>
              <i>
                <FiTwitter />
              </i>
              <i>
                <FiInstagram />
              </i>
              <i>
                <FiLinkedin />
              </i>
              <i>
                <FiYoutube />
              </i>
            </div>
          </div>
        </div>
        <div className="footer__item">
          <h1>Product</h1>
          <div className="footer__list">
            <Link href="">features</Link>
            <Link href="">features</Link>
            <Link href="">features</Link>
            <Link href="">features</Link>
            <Link href="">features</Link>
          </div>
        </div>
        <div className="footer__item">
          <h1>Company</h1>
          <div className="footer__list">
            <Link href="">features</Link>
            <Link href="">features</Link>
            <Link href="">features</Link>
            <Link href="">features</Link>
            <Link href="">features</Link>
          </div>
        </div>
        <div className="footer__item">
          <h1>Support</h1>
          <div className="footer__list">
            <Link href="">features</Link>
            <Link href="">features</Link>
            <Link href="">features</Link>
            <Link href="">features</Link>
            <Link href="">features</Link>
          </div>
        </div>
        <div className="footer__item">
          <h1>Contact Us</h1>
          <div className="footer__list">
            <span>
              <i>
                <FiMail />
              </i>
              contact@company.com
            </span>
            <span>
              <i>
                <FiPhoneCall />
              </i>
              (+234)816-2813-135
            </span>
            <span>
              <i>
                <FiMapPin />
              </i>
              794 Mcallister st, San Francisco, 94102.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
