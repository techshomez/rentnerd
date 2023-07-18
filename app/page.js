"use client";
import Search from "./components/home/search";
import CardSlider from "./components/reuse/card/slider";
import SideBySide from "./components/reuse/sideBySide";
import { FiHome, FiKey } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { BsKey } from "react-icons/bs";
import "./home.css";

export const metadata = {
  title: "Rentnerd | Home",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <div className="home">
      <Search />
      <CardSlider />
      <SideBySide
        main__class="left__image"
        title="The Easiest Method To Find A House"
        p_1="With their long working hours, cultural obsession with work, and high-stakes schooling system, South Koreans live life in the fast lane. Everyone has the same aim: to be successful. With their long working hours, cultural obsession with work, and high-stakes schooling system."
        p_2="With their long working hours, cultural obsession with work, and high-stakes schooling system."
        image="/images/bg.jpg"
        link="Try now"
      />
      <div className="list">
        <h1>Our work in 3 steps</h1>
        <article>
          With their long working hours, cultural obsession with work, and
          high-stakes schooling system.
        </article>
        <div className="list__Wrapper">
          <div className="list__item">
            <i>
              <FiHome />
            </i>
            <h2>Reasech Phase</h2>
            <p>Find your dream vacation rental in just a few clicks</p>
          </div>
          <div className="list__item">
            <i>
              <FaHandshake />
            </i>
            <h2>Close the deal</h2>
            <p>Find your dream vacation rental in just a few clicks</p>
          </div>
          <div className="list__item">
            <i>
              <BsKey />
            </i>
            <h2>Key delivery</h2>
            <p>Find your dream vacation rental in just a few clicks</p>
          </div>
        </div>
      </div>
      <SideBySide
        main__class="left__image right__image"
        title="Get the house in trust by working with our agents"
        p_1="With their long working hours, cultural obsession with work, and high-stakes schooling system, South Koreans live life in the fast lane. Everyone has the same aim: to be successful. With their long working hours, cultural obsession with work, and high-stakes schooling system."
        p_2="With their long working hours, cultural obsession with work, and high-stakes schooling system."
        image="/images/agent.JPG"
        link="Try now"
      />
    </div>
  );
}
