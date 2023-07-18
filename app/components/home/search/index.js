"use client";
import "./search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

const Search = () => {
  return (
    <div className="search">
      <div className="search__wrapper">
        <div className="search__items">
          <h2>
            City Search
            <i>
              <FiChevronDown />
            </i>
          </h2>
          <input type="text" placeholder="City Search" value="" />
        </div>
        <div className="search__items">
          <h2>
            Type of rent
            <i>
              <FiChevronDown />
            </i>
          </h2>
          <input type="text" placeholder="Type of rent" value="" />
        </div>
        <div className="search__items">
          <h2>
            Price
            <i>
              <FiChevronDown />
            </i>
          </h2>
          <input type="text" placeholder="Price" value="" />
        </div>
        <div className="search__btn">
          <button>
            <i>
              <AiOutlineSearch />
            </i>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
