"use client";
import Slider from "infinite-react-carousel";
import "./slider.css";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";

const CardSlider = () => {
  return (
    <div className="slider">
      <div className="wrapper">
        <Slider dots slidesToShow={3} autoplay={false} arrows={false}>
          <div className="slider__item">
            <Image
              src="/images/card_image/3.jpg"
              width={500}
              height={100}
              alt=""
              className="img"
            />
            <div className="list">
              <span>200 maggie-lane, New York, NY, 90000</span>
              <span>
                <i>
                  <FaBed />
                </i>
                3
              </span>
              <span>
                <i>
                  <FaBath />
                </i>
                1
              </span>
            </div>
            <h2>Ocean breeze villa</h2>
            <h4>$950,000.00</h4>
          </div>
          <div className="slider__item">
            <Image
              src="/images/card_image/3.jpg"
              width={500}
              height={100}
              alt=""
              className="img"
            />
            <div className="list">
              <span>200 maggie-lane, New York, NY, 90000</span>
              <span>
                <i>
                  <FaBed />
                </i>
                3
              </span>
              <span>
                <i>
                  <FaBath />
                </i>
                1
              </span>
            </div>
            <h2>Ocean breeze villa</h2>
            <h4>$950,000.00</h4>
          </div>
          <div className="slider__item">
            <Image
              src="/images/card_image/3.jpg"
              width={500}
              height={100}
              alt=""
              className="img"
            />
            <div className="list">
              <span>200 maggie-lane, New York, NY, 90000</span>
              <span>
                <i>
                  <FaBed />
                </i>
                3
              </span>
              <span>
                <i>
                  <FaBath />
                </i>
                1
              </span>
            </div>
            <h2>Ocean breeze villa</h2>
            <h4>$950,000.00</h4>
          </div>
          <div className="slider__item">
            <Image
              src="/images/card_image/3.jpg"
              width={500}
              height={100}
              alt=""
              className="img"
            />
            <div className="list">
              <span>200 maggie-lane, New York, NY, 90000</span>
              <span>
                <i>
                  <FaBed />
                </i>
                3
              </span>
              <span>
                <i>
                  <FaBath />
                </i>
                1
              </span>
            </div>
            <h2>Ocean breeze villa</h2>
            <h4>$950,000.00</h4>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;