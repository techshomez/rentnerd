"use client";
import { useEffect } from "react";
import "./banner.css";
import { BsArrowRight } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="banner">
      <div className="banner__content">
        <h1 data-aos="fade-right">
          Finding your new <br />
          home is simple
        </h1>
        <p data-aos="fade-left">
          With their long working hours, cultural obsession with work, and
          high-stakes schooling system, South Koreans live life in the fast
          lane. Everyone has the same aim: to be successful.
        </p>
        <div className="search" data-aos="fade-left">
          <input type="text" placeholder="Search" />
          <i>
            <BsArrowRight />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Banner;
